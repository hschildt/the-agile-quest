import { 
  Component, 
  OnDestroy,
  OnInit,
  ViewChildren
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
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { 
  ANIMATION_DURATION_MS,
  ANIMATION_EASING,
  ANIMATION_TIMING,
  ANIMATION_TIMING_DELAYED,
  PERSPECTIVE,
  CookieService,
  Indicator,
  LocalizedString,
  LogDatum,
  Queue,
  Ribbon,
  Scenario,
  SharedService,
  Strategy,
  ANIMATION_DURATION,
} from '../../shared';
import { ValueGaugeComponent } from './value-gauge.component';

// See startRound()
type AnimationDirection = 'backward' | 'forward';
type AnimationState = 'current-enter' | 'current' | 'current-leave' | 'current-noTransition' | 'previous' | 'previous-noTransition' | 'previous-leave';

const COOKIE_PREFIX = 'userData_';
const DATA_KEY_VERSION = 'v';
// const DATA_KEY_SHOWREPORT = 'r';
const DATA_SEPARATOR = ',';
const DATA_KEY_STRATEGIES = 's';
const ROUND_BASE = 1;
const ANIMATION_DURATION_LONGER_MS = 450;
const ANIMATION_TIMING_PREVIOUS_CARDS_MS = `${ANIMATION_DURATION_LONGER_MS}ms ${ANIMATION_EASING}`;

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
          transform: 'translateY(50vh) scale(1.05)',
        })
      ),
      state('current',
        style({
          opacity: 1,
          transform: 'none'
        })
      ),
      state('current-leave',
        style({
          opacity: 0,
          transform: 'translateX(100vw) scale(1.0)',
        })
      ),
      transition('current-enter <=> current', [
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS)
      ]),
      transition('current <=> current-leave', [
        animate(ANIMATION_TIMING)
      ]),
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

  // @HostListener('window:beforeunload')
  // onBeforeUnload(): void {
  //   this.saveGameplayData();
  // }
  // @HostListener('window:unload')
  // onUnload(): void {
  //   this.saveGameplayData();
  // }

  @ViewChildren(ValueGaugeComponent)
  private indicatorComponents: ValueGaugeComponent[] = [];

  animationDirection: AnimationDirection = 'forward';
  animationDuration = ANIMATION_DURATION_MS;
  bottomDialog?: {
    text: string,
    confirm: () => void
  };
  displayedRound = 1;
  enableGoToPrevious: boolean = false;
  inFeedbackPhase: boolean = false;
  performanceIndicators: Indicator[] = [];
  organisationalAttributes: Indicator[] = [];
  playedScenarios: Scenario[] = [];
  playedStrategies: Strategy[] = [];
  ribbons: Ribbon[] = [];
  roundStarting: boolean = false;
  scenarioTrigger: AnimationState = 'current-enter';
  showGameOverDialog: boolean = false;
  showReport: boolean = false;
  showScenario: boolean = false;
  showUserDataForm: boolean = false;
  strategyCards: Strategy[] = [];
  strategyCardsTrigger: AnimationState = 'current-enter';
  topDialog?: {
    text: string,
    confirm: () => void
  };
  userData: {name: string, group: string} = {
    name: '',
    group: ''
  };

  private _logData = new Array<LogDatum[]>();
  private _sessionId: string = '';
  private _subscriptions = new Array<Subscription>();

  constructor(
    private cookie: CookieService,
    private route:  ActivatedRoute,
    private router: Router,
    private shared: SharedService
  ) {
    // this.resetState();
    this.performanceIndicators = Object.values(this.shared.indicators).filter(i => i.type === 'performance');
    this.organisationalAttributes = Object.values(this.shared.indicators).filter(i => i.type === 'organisation');
  }

  ngOnInit(): void {
    this.readCookie();
    this.readParams();
    // We need to explicitly read the params whenever navigating
    // as onInit won't be called while we stay on the same page
    this._subscriptions.push(
      this.router.events.pipe(
        filter(evt => evt instanceof NavigationEnd)
      ).subscribe(() => {
        this.readParams();
        this.startRound();
      })
    );
    if (this._sessionId == '')
      this._sessionId = `s${Math.random()}`;
    if (this.haveUserData && this.round > 1)
      this.startRound();
    else
      this.askForUserData();
  }

  ngOnDestroy(): void {
    this.saveGameplayData();
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  onGameOver(): void {
    this.showGameOverDialog = true;
    this.saveGameplayData();
  }

  readCookie(): void {
    let k: keyof typeof this.userData;
    for (k in this.userData) {
      if (this.userData[k] == null || this.userData[k] == '' )
        this.userData[k] = this.cookie.read(COOKIE_PREFIX + k) ?? '';
    }
  }

  writeCookie(): void {
    let k: keyof typeof this.userData;
    for (k in this.userData) {
      if (!(this.userData[k] == null || this.userData[k] == '' ))
        this.cookie.write(COOKIE_PREFIX + k, this.userData[k]);
    }
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
    return this.displayedRound / this.shared.settings.rounds * 100;
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

  get haveUserData(): boolean {
    let k: keyof typeof this.userData;
    for (k in this.userData) {
      if (this.userData[k] == null || this.userData[k] == '' )
        return false;
    }
    return true;
  }

  /*
   * Get the top position of the ribbon at the given index
   */
  getRibbonLeft(index: number): string {
    if (this.ribbons.length < 2)
      return '0%';
    // NB. Match the last measurement to ribbon width
    return `calc(${index} / ${this.ribbons.length - 1} * (100% - 3.5rem))`;
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
    if (this.animationDirection === 'backward')
      queue = [
        () => this.resetState(),
        // This sets a class of the same name, which highlights indicators
        () => this.roundStarting = true,
        225,
        () => this.strategyCardsTrigger = 'current-enter',
        // () => this.previousCardsTrigger = 'current',
        () => this.scenarioTrigger = 'current-enter',
        ANIMATION_DURATION_LONGER_MS,
        () => this.initScenarios(),
        () => this.scenarioTrigger = 'previous',
        100,
        () => {
          this.scenarioTrigger = 'current';
          this.displayedRound = this.round;
        },
        () => this.initIndicators(),
        () => this.initRibbons(),
        () => {
          this.initStrategyCards();
          // this.previousCardsTrigger = 'previous-leave';
          this.strategyCardsTrigger = 'current-leave';
          this.logAction(true);
        },
        225,
        () => this.strategyCardsTrigger = 'current',
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
        () => this.strategyCardsTrigger = 'current-leave',
        // () => this.previousCardsTrigger = 'previous-leave',
        () => this.scenarioTrigger = 'previous',
        ANIMATION_DURATION_LONGER_MS,
        () => {
          this.initScenarios();
          this.scenarioTrigger = 'current-enter';
        },
        () => {
          this.scenarioTrigger = 'current';
          this.displayedRound = this.round;
        },
        ANIMATION_DURATION_LONGER_MS,
        () => this.initIndicators(),
        () => this.initRibbons(),
        1500,
        () => {
          if (this.gameOver)
            this.onGameOver();
          else {
            this.initStrategyCards();
            // this.previousCardsTrigger = 'previous-noTransition';
            this.strategyCardsTrigger = 'current-enter';
            this.logAction();
          }
        },
        225,
        () => {
          if (!this.gameOver)
            this.strategyCardsTrigger = 'current';
        },
        1000,
        () => this.roundStarting = false
      ];

    this.shared.processQueue(queue);
  }

  resetState(): void {
    this.bottomDialog = undefined;
    this.enableGoToPrevious = false;
    this.roundStarting = false;
    this.showGameOverDialog = false;
    this.showScenario = false;
    this.showReport = false;
    this.showUserDataForm = false;
    this.topDialog = undefined;

    // Set the correct flipped/locked states for strategies
    // We delay this a bit to let the cards fly out of view first
    setTimeout(() => {
      this.inFeedbackPhase = false;
      for (const sid in this.shared.strategies) {
        const s = this.shared.strategies[sid];
        s.locked = s.flipped = false;
      }
    }, ANIMATION_DURATION_MS * 4);
  }

  initScenarios(): void {
    const scenarios = [this.shared.firstScenario];
    this.playedStrategies.map(s => 
      scenarios.push(this.shared.scenarios[s.scenario])
    );
    this.playedScenarios = scenarios;
  }

  initIndicators(): void {
    // Freeze previous changes
    this.indicatorComponents.forEach(c => c.updatePreviousValue());
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
    // Calc values based on the effects of all played scenarios and strategies
    for (const iid in this.shared.indicators) {
      const indicator = this.shared.indicators[iid];
      let value = indicator.initialValue ?? 0;
      this.playedScenarios.forEach((s, i) => {
        const effect = s.effects?.[iid] ?? 0;
        value += effect;
      });
      this.playedStrategies.forEach((s, i) => {
        const effect = s.effects?.[iid] ?? 0;
        value += effect;
      });
      if (iid in ribbonEffects)
        value += ribbonEffects[iid];
      indicator.value = value;
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

  initStrategyCards(): void {
    this.strategyCards = (this.scenario?.strategies ?? []).map(s => this.shared.strategies[s]);
    this.enableGoToPrevious = true;
  }

  /**************************************
   * USER ACTIONS                       *
   **************************************/


  askForUserData(): void {
    this.showUserDataForm = true;
  }

  onUserDataSubmit(): void {
    this.writeCookie();
    this.showUserDataForm = false;
    this.startRound();
  }

  goToPreviousRound(event?: Event): void {
    // Prevent clicks when we are still waiting for this round's strategies
    if (!this.enableGoToPrevious)
      return;

    // True here means we go back
    this.updateParams(true);
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
    this.shared.processQueue(queue);
  }

  executeStrategy(strategy: Strategy): void {
    this.updateParams();
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
   * URL AND COOKIE PARAMS              *
   **************************************/

  updateParams(goBack: boolean = false): void {
    // We use router to save the game data between sessions
    this.router.navigate([{
      [DATA_KEY_VERSION]:    this.shared.settings.version,
      [DATA_KEY_STRATEGIES]: this._encodeIds(goBack && this.playedStrategies.length > 0 ? 
                                             this.playedStrategies.slice(0, -1) : 
                                             this.playedStrategies),
      //[DATA_KEY_SHOWREPORT]: this.showReport ? 1 : 0
    }]);
  }

  readParams(): void {
    // Save current round here, so we can check which direction to animate to
    const currentRound = this.round,
          params = this.route.snapshot.params;
    if (params?.[DATA_KEY_VERSION] && 
        params[DATA_KEY_VERSION] == this.shared.settings.version &&
        params[DATA_KEY_STRATEGIES])
      this.playedStrategies = this._decodeIds(params[DATA_KEY_STRATEGIES]);
    else
      this.playedStrategies = [];
    // NB. This only counts the round number, so if we were to edit the url
    // manually, we would get an inconsistent transition
    this.animationDirection = this.round < currentRound ? 'backward' : 'forward';
  }

  private _encodeIds(list: Strategy[]): string {
    return list.map(s => s.id).join(DATA_SEPARATOR);
  }
  private _decodeIds(text: string): Strategy[] {
    return text.split(DATA_SEPARATOR).map(s => this.shared.strategies[s]);
  }

  /**************************************
   * DATA LOGGING
   **************************************/

  logAction(back = false): void {
    const now = new Date(),
          nowStr = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + 
                   now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),
          strategy = this.latestStrategy,
          scenario = this.scenario;
    const datum: LogDatum[] = [
      this._sessionId,
      this.userData.name,
      this.userData.group,
      nowStr,
      this.round,
      back ? -1 : (strategy ? strategy.id : -2),
      back ? 'BACK' : (strategy ? this.t(strategy.title) : 'NO STRATEGY'),
      scenario ? scenario.id : -2,
      scenario ? this.t(scenario.title) : 'NO SCENARIO',
    ];
    for (const k in this.shared.indicators) {
      datum.push(this.shared.indicators[k].value ?? '');
    }
    this._logData.push(datum);
    // We now do this after each event, bc window.unload does not seem to always work.
    // It would be better, however, to log everything only at the end of the game.
    this.saveGameplayData();
  }

  clearLog(): void {
    this._logData = [];
  }

  get hasLog(): boolean {
    return this._logData.length > 0;
  }

  saveGameplayData(): void {
    if (!this.hasLog) 
      return;
    this.shared.logGameplayData(this._logData); // .then(r => console.log(r));
    this.clearLog();
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