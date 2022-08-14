import { 
  Component, 
  OnDestroy,
  OnInit 
} from '@angular/core';
import { 
  ActivatedRoute,
  NavigationEnd,
  Router 
} from '@angular/router';
import { 
  trigger,
  state,
  style,
  animate,
  transition 
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { 
  ANIMATION_DURATION_MS,
  ANIMATION_EASING,
  ANIMATION_TIMING,
  ANIMATION_TIMING_DELAYED,
  PERSPECTIVE,
  Indicator,
  LocalizedString,
  Ribbon,
  Scenario,
  SharedService,
  Strategy,
} from '../../shared';

// See startRound()
type AnimationDirection = 'backward' | 'forward';
type AnimationState = 'current-enter' | 'current' | 'current-noTransition' | 'previous' | 'previous-noTransition' | 'previous-leave';
type QueueStep = number | (() => void);
type Queue = QueueStep[];

const DATA_KEY_VERSION = 'v';
// const DATA_KEY_SHOWREPORT = 'r';
const DATA_SEPARATOR = ',';
const DATA_KEY_STRATEGIES = 's';
const ROUND_BASE = 1;
const ANIMATION_DURATION_PREVIOUS_CARDS_MS = 450;
const ANIMATION_TIMING_PREVIOUS_CARDS_MS = `${ANIMATION_DURATION_PREVIOUS_CARDS_MS}ms ${ANIMATION_EASING}`;

const DEBUG = true;
const debug = function debug(...args: any[]): void {
  if (DEBUG) console.log(...args);
}

/*
 * For convenience
 */
const sum = function sum(arr: Array<number>): number {
  return arr.reduce((a, b) => a + b, 0);
}
const clamp = function clamp(num: number, min = 0, max = 1): number {
  return num <= min ? min : num >= max ? max : num;
}
const processQueue = function processQueue(queue: Queue) {
  if (queue.length < 1)
    return;

  const step = queue.shift();

  if (typeof step === 'number') {
    setTimeout(() => processQueue(queue), step);
  } else if (typeof step === 'function') {
    step();
    processQueue(queue);
  } else {
    throw new Error('Invalid step');
  }
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(ANIMATION_TIMING, style({
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
        }),
        // We add a delay to allow for the :enter animation to finish first
        // when switching subcategories
        animate(ANIMATION_TIMING_DELAYED, style({
          opacity: 0,
        })),
      ]),
    ]),
    trigger('strategyCards', [
      state('current-enter',
        style({
          opacity: 0,
          transform: 'translateY(60vh)'
        }),
      ),
      state('current, current-noTransition',
        style({
          opacity: 1,
          transform: 'none'
        }),
      ),
      state('previous, previous-noTransition',
        style({
          opacity: 0.3,
          transform: 'translateY(-2.5rem) scale(0.9)',
        })
      ),
      state('previous-leave',
        style({
          opacity: 0.0,
          transform: 'translateY(-5rem) scale(0.8)',
        })
      ),
      transition('current-enter <=> current, current <=> previous, previous <=> previous-leave', [
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS)
      ]),
    ]),
    trigger('previousCards', [
      state('current',
        style({
          opacity: 0.3,
          transform: 'translateY(-2.5rem) scale(0.9)',
        })
      ),
      state('previous',
        style({
          opacity: 0.0,
          transform: 'translateY(-5rem) scale(0.8)',
        })
      ),
      state('next',
        style({
          opacity: 0.0,
          transform: 'translateY(-2.5rem) scale(0.9)',
        })
      ),
      transition('current <=> previous', [
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS)
      ]),
    ]),
    trigger('previousCardsFade', [
      state('faded', style({
        opacity: 0.15
      })),
      state('normal', style({
        opacity: 0.3
      })),
      transition('normal <=> faded', [
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS)
      ])
    ]),
    trigger('ribbon', [
      transition(':enter', [
        style({
          transform: 'scale(0)'
        }),
        // We add a delay to allow for the :leave animation to finish first
        animate(ANIMATION_TIMING, style({
          transform: 'scale(1)'
        })),
      ]),
      transition(':leave', [
        style({
          transform: 'scale(1)'
        }),
        // We add a delay to allow for the :leave animation to finish first
        animate(ANIMATION_TIMING, style({
          transform: 'scale(0)'
        })),
      ])
    ]),
    trigger('scenario', [
      state('current',
        style({
          opacity: 1,
          transform: `${PERSPECTIVE}`,
        })
      ),
      state('previous',
        style({
          opacity: 0,
          transform: `${PERSPECTIVE} translate3d(0px, 15vh, -400px)`,
        })
      ),
      state('current-enter',
        style({
          opacity: 0,
          transform: `${PERSPECTIVE} translate3d(0px, -25vh, 500px)`
        })
      ),
      transition('current <=> *', [
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS)
      ]),
    ]),
  ],
})
export class GameComponent implements OnDestroy, OnInit {

  animationDirection: AnimationDirection = 'forward';
  bottomDialog?: {
    text: string,
    confirm: () => void
  };
  currentCardsTrigger: AnimationState = 'current-enter';
  enableGoToPrevious: boolean = false;
  inFeedbackPhase: boolean = false;
  performanceIndicators: Indicator[] = [];
  organisationalAttributes: Indicator[] = [];
  playedScenarios: Scenario[] = [];
  playedStrategies: Strategy[] = [];
  previousCardsTrigger: AnimationState = 'current-enter';
  previousStrategyCards: Strategy[] = [];
  ribbons: Ribbon[] = [];
  roundStarting: boolean = false;
  scenarioTrigger: AnimationState = 'current-enter';
  showGameOverDialog: boolean = false;
  showReport: boolean = false;
  showScenario: boolean = false;
  strategyCards: Strategy[] = [];
  topDialog?: {
    text: string,
    confirm: () => void
  };

  private _subscriptions = new Array<Subscription>();

  constructor(
    private route:     ActivatedRoute,
    private router:    Router,
    private shared:    SharedService
  ) {
    this.resetState();
    this.performanceIndicators = Object.values(this.shared.indicators).filter(i => i.type === 'performance');
    this.organisationalAttributes = Object.values(this.shared.indicators).filter(i => i.type === 'organisation');
  }

  ngOnInit(): void {
    this.readParams();
    // We need to explicitly read the params whenever navigating
    // as onInit won't be called while we stay on the same page
    this._subscriptions.push(
      this.router.events.pipe(
        filter(evt => evt instanceof NavigationEnd)
      ).subscribe(() => this.readParams())
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(s => s.unsubscribe());
  }


  /**************************************
   * GETTERS                            *
   **************************************/

  /*
   * Note that round is ROUND_BASE-based (= 1)
   */
  get round(): number {
    return Math.min(this.rawRound + ROUND_BASE, this.lastRound);
  }

  get lastRound(): number {
    return this.shared.settings.rounds;
  }

  /*
   * The absolute round without ROUND_BASE
   */
  get rawRound(): number {
    return this.playedStrategies.length;
  }

  get isFirstRound(): boolean {
    return this.rawRound === 0;
  }
  
  get roundsLeft(): number {
    return this.shared.settings.rounds - this.rawRound;
  }

  get roundsUsedPercentage(): number {
    return (this.rawRound + 1) / this.shared.settings.rounds * 100;
  }

  get gameOver(): boolean {
    return (this.roundsLeft <= 0 || this.scenario != null && (!this.scenario.strategies || this.scenario.strategies.length === 0))
           && !this.showReport;
  }

  get latestStrategy(): Strategy | null {
    if (this.playedStrategies.length === 0)
      return null;
    return this.playedStrategies[this.playedStrategies.length - 1];
  }

  get previousScenario(): Scenario | null {
    return this.playedScenarios.length > 1 ? 
           this.playedScenarios[this.playedScenarios.length - 2] :
           null;
  }

  get scenario(): Scenario | null {
    return this.playedScenarios.length > 0 ? 
           this.playedScenarios[this.playedScenarios.length - 1] :
           null;
  }

  /*
   * Get the top position of the ribbon at the given index
   */
  getRibbonTop(index: number): string {
    if (this.ribbons.length === 0)
      return '0%';
    // NB. Match last measurement to ribbon height
    return `calc(${index} / ${this.ribbons.length} * (100% - 11.6979592rem))`;
  }


  /**************************************
   * VALUE INITIALISATION               *
   **************************************/

  /*
   * Perform a number of steps at the start of the round with 
   * delays in between them.
   */
  startRound(): void {

    let queue: Queue;

    // console.log(this.animationDirection);
    
    if (this.animationDirection === 'backward')
      queue = [
        () => this.resetState(),
        // This sets a class of the same name, which highlights indicators
        () => this.roundStarting = true,
        225,
        () => this.currentCardsTrigger = 'current-enter',
        () => this.previousCardsTrigger = 'current',
        () => this.scenarioTrigger = 'current-enter',
        ANIMATION_DURATION_PREVIOUS_CARDS_MS,
        () => this.initScenarios(),
        () => this.scenarioTrigger = 'previous',
        100,
        () => this.scenarioTrigger = 'current',
        () => this.initIndicators(),
        () => this.initRibbons(),
        () => {
          this.initPreviousStrategyCards();
          this.initStrategyCards();
          this.previousCardsTrigger = 'previous-leave';
          this.currentCardsTrigger = 'current-noTransition';
        },
        225,
        () => this.previousCardsTrigger = 'previous',
        1000,
        () => this.roundStarting = false
      ];
    else
      queue = [
        // NB. This unflips the card just played, so we must wait for that
        () => this.resetState(),
        3 * ANIMATION_DURATION_MS,
        // This sets a class of the same name, which highlights indicators
        () => this.roundStarting = true,
        () => this.currentCardsTrigger = 'previous',
        () => this.previousCardsTrigger = 'previous-leave',
        () => this.scenarioTrigger = 'previous',
        ANIMATION_DURATION_PREVIOUS_CARDS_MS,
        () => {
          this.initScenarios();
          this.scenarioTrigger = 'current-enter';
        },
        () => this.scenarioTrigger = 'current',
        ANIMATION_DURATION_PREVIOUS_CARDS_MS,
        () => this.initIndicators(),
        () => this.initRibbons(),
        1500,
        () => {
          if (this.gameOver)
            this.showGameOverDialog = true;
          else {
            this.initPreviousStrategyCards();
            this.initStrategyCards();
            this.previousCardsTrigger = 'previous-noTransition';
            this.currentCardsTrigger = 'current-enter';
          }
        },
        225,
        () => {
          if (!this.gameOver)
            this.currentCardsTrigger = 'current';
        },
        1000,
        () => this.roundStarting = false
      ];

    processQueue(queue);

  }

  resetState(): void {
    this.bottomDialog = undefined;
    this.enableGoToPrevious = false;
    this.inFeedbackPhase = false;
    this.roundStarting = false;
    this.showGameOverDialog = false;
    this.showScenario = false;
    this.showReport = false;
    this.topDialog = undefined;

    // Set the correct flipped/locked states for strategies
    for (const sid in this.shared.strategies) {
      const s = this.shared.strategies[sid];
      s.locked = s.flipped = false;
      // if (!this.playedStrategies.includes(s))
      //   s.locked = s.flipped = false;
      // else
      //   s.locked = s.flipped = true;
    }
  }

  initScenarios(): void {
    const scenarios = [this.shared.firstScenario];
    this.playedStrategies.map(s => 
      scenarios.push(this.shared.scenarios[s.scenario])
    );
    this.playedScenarios = scenarios;
  }

  initIndicators(): void {

    // Preload ribbon effects
    const ribbonEffects: {[id: string]: number} = {}
    this.ribbons
      .filter(r => "effects" in r)
      .forEach(r => {
        for (const iid in r.effects) {
          if (iid in ribbonEffects)
            ribbonEffects[iid] += r.effects[iid];
          else
            ribbonEffects[iid] = r.effects[iid];
        }
      });

    for (const iid in this.shared.indicators) {

      // Calc values based on the effects of all played scenarios and strategies
      const indicator = this.shared.indicators[iid];

      let value = indicator.initialValue ?? 0,
          previousValue = indicator.initialValue ?? 0;

      this.playedScenarios.forEach((s, i) => {
        const effect = s.effects?.[iid] ?? 0;
        value += effect;
        if (i < this.playedScenarios.length - 1)
          previousValue += effect;
      });

      this.playedStrategies.forEach((s, i) => {
        const effect = s.effects?.[iid] ?? 0;
        value += effect;
        if (i < this.playedStrategies.length - 1)
          previousValue += effect;
      });

      if (iid in ribbonEffects)
        value += ribbonEffects[iid];

      // XXXX RIBBons dont' comply with prev values!!!!
      // Lose url encoding
      // Convert to internal state

      debug(iid, "From", previousValue, "to", value);
      indicator.value = value;
      indicator.previousValue = previousValue;
    }
  }

  initRibbons(): void {
    const ribbons = new Set<Ribbon>();
    this.playedStrategies
      .filter(s => s.ribbons && s.ribbons.length > 0)
      .forEach(s => s.ribbons!.forEach(r => ribbons.add(this.shared.ribbons[r])));
    Object.values(this.shared.ribbons)
      .filter(r => this.shared.checkRibbon(r))
      .forEach(r => ribbons.add(r));
    this.ribbons = Array.from(ribbons);
  }

  initPreviousStrategyCards(): void {
    this.previousStrategyCards = (this.previousScenario?.strategies ?? []).map(s => this.shared.strategies[s]);
  }

  initStrategyCards(): void {
    this.strategyCards = (this.scenario?.strategies ?? []).map(s => this.shared.strategies[s]);
    this.enableGoToPrevious = true;
  }

  /**************************************
   * USER ACTIONS                       *
   **************************************/

  goToPreviousRound(event?: Event): void {
    // Prevent clicks when we are still waiting for this round's strategies
    if (!this.enableGoToPrevious)
      return;

    // True here means we go back
    this.updateUrl(true);
  }

  loadStrategyCards(): void {
    setTimeout(() => this.initStrategyCards(), ANIMATION_DURATION_MS);
  }

  /*
   * Selecting a strategy goes in three steps:
   * 1. Lock the card => onCardLocked
   * 2. Confirm => showStrategyFeedback
   * 3. Go to next round => executeStrategy => startRound
   */
  onCardLocked(strategy: Strategy): void {

    if (this.inFeedbackPhase)
      return;

    if (!strategy.locked) {
      // Only one strategy can be locked at the same time
      this.strategyCards.forEach(s => s.locked = false);
      strategy.locked = true;

      this.bottomDialog = {
        text: this.t('Execute selected strategy'),
        confirm: () => this.showStrategyFeedback(strategy)
      };

    } else {
      strategy.locked = false;
      this.bottomDialog = undefined;
    }
     
  }

  showStrategyFeedback(strategy: Strategy): void {

    const queue: Queue = [
      () => {
        strategy.flipped = true;
        // This disables further selection of strategies
        this.inFeedbackPhase = true;
        this.bottomDialog = undefined;
        this.playedStrategies.push(strategy);
        // Update indicators (nb. the next scenario doesn't affect these yet)
      },
      225,
      () => this.initIndicators(),
      775,
      () => this.scenarioTrigger = 'previous',
      1000,
      () => this.topDialog = {
        text: this.t('Start next round'),
        confirm: () => this.executeStrategy(strategy)
      }
    ];

    processQueue(queue);

  }

  executeStrategy(strategy: Strategy): void {
    this.updateUrl();
  }

  modalClick(event?: Event): void {
    this.startOver(event);
  }

  startOver(event?: Event): void {
    // We are just navigating to the title screen
    this.router.navigate(['/']);
    // To disable background click
    event?.stopPropagation();
  }

  /**************************************
   * URL PARAMS                         *
   **************************************/

  public updateUrl(goBack: boolean = false): void {
    // We use router to save the game data between sessions
    this.router.navigate([{
      [DATA_KEY_VERSION]:    this.shared.settings.version,
      [DATA_KEY_STRATEGIES]: this._encodeIds(goBack && this.playedStrategies.length > 0 ? 
                                             this.playedStrategies.slice(0, -1) : 
                                             this.playedStrategies),
      //[DATA_KEY_SHOWREPORT]: this.showReport ? 1 : 0
    }]);
  }

  public readParams(): void {
    // Only load purchases from route data if the application versions match
    // Otherwise reset the state to handle the going back to an url without params
    if (this.route.snapshot.params?.[DATA_KEY_VERSION] && 
        this.route.snapshot.params[DATA_KEY_VERSION] == this.shared.settings.version) {

      // Save current round here, so we can check which direction to animate to
      const currentRound = this.round;

      if (this.route.snapshot.params[DATA_KEY_STRATEGIES])
        this.playedStrategies = this._decodeIds(this.route.snapshot.params[DATA_KEY_STRATEGIES]);
      else
        this.playedStrategies = [];

      // NB. This only counts the round number, so if we were to edit the url
      // manually, we would get an inconsistent transition
      this.animationDirection = this.round < currentRound ? 'backward' : 'forward';
      
      //   if (this.route.snapshot.params[DATA_KEY_SHOWREPORT] && 
      //       this.route.snapshot.params[DATA_KEY_SHOWREPORT] == 1)
      //     this.showReport = true;
      //   else
      //     this.showReport = false;
    }
    // This resets the screen
    this.startRound();
  }

  private _encodeIds(list: Strategy[]): string {
    return list.map(s => s.id).join(DATA_SEPARATOR);
  }
  private _decodeIds(text: string): Strategy[] {
    return text.split(DATA_SEPARATOR).map(s => this.shared.strategies[s]);
  }

  /**************************************
   * TEXT LOCALISATION                  *
   **************************************/

  /*
   * Localize a string or LocalizedString object
   * See SharedService
   */
  public t(text: string | LocalizedString | undefined = ''): string {
    return this.shared.getText(text);
  }

}