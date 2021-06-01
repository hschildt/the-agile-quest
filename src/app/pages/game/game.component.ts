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
  Settings,
  SharedService,
  Strategy,
  Texts
} from '../../shared';
import { ResultChartData } from './result-chart.component';

const DATA_KEY_VERSION = 'v';
const DATA_KEY_SHOWREPORT = 'r';
const DATA_SEPARATOR = ',';
const DATA_KEY_STRATEGIES = 's';
const ROUND_BASE = 1;

const ANIMATION_DURATION_PREVIOUS_CARDS_MS = 450;
const ANIMATION_TIMING_PREVIOUS_CARDS_MS = `${ANIMATION_DURATION_PREVIOUS_CARDS_MS}ms ${ANIMATION_EASING}`;

const ROUND_START_SCHEDULE_MS: {[event: string]: number} = {
  hidePreviousStrategies: 225,
  initIndicators: 700
}
ROUND_START_SCHEDULE_MS.showPreviousStrategies = 
  ROUND_START_SCHEDULE_MS.hidePreviousStrategies + ANIMATION_DURATION_PREVIOUS_CARDS_MS;
ROUND_START_SCHEDULE_MS.hideScenario  = 
  ROUND_START_SCHEDULE_MS.showPreviousStrategies + ANIMATION_DURATION_PREVIOUS_CARDS_MS - 125;
ROUND_START_SCHEDULE_MS.showScenario  = 
  ROUND_START_SCHEDULE_MS.hideScenario + ANIMATION_DURATION_PREVIOUS_CARDS_MS;
ROUND_START_SCHEDULE_MS.showLoadStrategies  = 
  ROUND_START_SCHEDULE_MS.showScenario + 2000;
ROUND_START_SCHEDULE_MS.fadeOutIndicators = ROUND_START_SCHEDULE_MS.showLoadStrategies;

/*
 * For convenience
 */
function sum(arr: Array<number>): number {
  return arr.reduce((a, b) => a + b, 0);
}
function clamp(num: number, min: number = null, max: number = null): number {
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
    trigger('currentCards', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(60vh)'
        }),
        // We add a delay to allow for the :leave animation to finish first
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS, style({
          opacity: 1,
          transform: 'none'
        })),
      ])
    ]),
    trigger('previousCards', [
      transition(':enter', [
        style({
          opacity: 1,
          transform: 'none'
        }),
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS, style({
          opacity: 0.3,
          transform: 'translateY(-2.5rem) scale(0.9)',
        })),
      ]),
      transition(':leave', [
        style({
          opacity: 0.3,
          transform: 'translateY(-2.5rem) scale(0.9)',
        }),
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS, style({
          opacity: 0.0,
          transform: 'translateY(-5rem) scale(0.8)',
        })),
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
      transition(':enter', [
        style({
          opacity: 0,
          transform: `${PERSPECTIVE} translate3d(0px, -25vh, 500px)`
        }),
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS, style({
          opacity: 1,
          transform: `${PERSPECTIVE}`,
        })),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          transform: `${PERSPECTIVE}`,
        }),
        animate(ANIMATION_TIMING_PREVIOUS_CARDS_MS, style({
          opacity: 0,
          transform: `${PERSPECTIVE} translate3d(0px, 15vh, -400px)`,
        })),
      ]),
    ]),
  ],
})
export class GameComponent implements OnDestroy, OnInit {

  bottomDialog: {
    text: string,
    confirm: () => void
  };
  inFeedbackPhase: boolean = false;
  performanceIndicators: Indicator[] = [];
  organisationalAttributes: Indicator[] = [];
  playedScenarios: Scenario[] = [];
  playedStrategies: Strategy[] = [];
  previousStrategyCards: Strategy[] = [];
  ribbons: Ribbon[] = [];
  roundStarting: boolean = false;
  showLoadStrategyCardsDialog: boolean = false;
  showPreviousStrategyCards: boolean = false;
  showReport: boolean = false;
  showScenario: boolean = false;
  showStrategyCards: boolean = false;
  strategyCards: Strategy[] = [];

  private _subscriptions = new Array<Subscription>();

  constructor(
    private route:     ActivatedRoute,
    private router:    Router,
    private shared:    SharedService
  ) {
    this.resetState();
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
    return this.rawRound + ROUND_BASE;
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
    return (this.roundsLeft <= 0 || !this.scenario.strategies || this.scenario.strategies.length === 0)
           && !this.showReport;
  }

  get latestStrategy(): Strategy {
    if (this.playedStrategies.length === 0)
      return null;
    return this.playedStrategies[this.playedStrategies.length - 1];
  }

  get previousScenario(): Scenario {
    return this.playedScenarios.length > 1 ? 
           this.playedScenarios[this.playedScenarios.length - 2] :
           null;
  }


  get scenario(): Scenario {
    return this.playedScenarios[this.playedScenarios.length - 1];
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

  startRound(): void {

    this.resetState();
    
    // Init different data
    this.initScenarios();
    this.initRibbons();

    // This sets a class of the same name, which highlights indicators
    this.roundStarting = true;

    // Coordinate entry, exit and update of differenet elements
    setTimeout(() => this.initIndicators(), ROUND_START_SCHEDULE_MS.initIndicators);
    setTimeout(() => this.showPreviousStrategyCards = false, ROUND_START_SCHEDULE_MS.hidePreviousStrategies);
    setTimeout(() => this.initPreviousStrategyCards(), ROUND_START_SCHEDULE_MS.showPreviousStrategies);
    setTimeout(() => this.showScenario = false, ROUND_START_SCHEDULE_MS.hideScenario);
    setTimeout(() => this.showScenario = true, ROUND_START_SCHEDULE_MS.showScenario);
    setTimeout(() => this.showLoadStrategyCardsDialog = true, ROUND_START_SCHEDULE_MS.showLoadStrategies);
    setTimeout(() => this.roundStarting = false, ROUND_START_SCHEDULE_MS.fadeOutIndicators);

  }

  resetState(): void {
    this.bottomDialog = undefined;
    this.inFeedbackPhase = false;
    this.roundStarting = false;
    this.showLoadStrategyCardsDialog = false;
    this.showScenario = false;
    this.showReport = false;

    // Set the correct flipped/locked states for strategies
    for (const sid in this.shared.strategies) {
      const s = this.shared.strategies[sid];
      if (!this.playedStrategies.includes(s)) {
        s.locked = false;
        s.flipped = false;
      } else {
        s.locked = true;
        s.flipped = true;
      }
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

      indicator.value = value;
      indicator.previousValue = previousValue;
    }

    this.performanceIndicators = Object.values(this.shared.indicators).filter(i => i.type === 'performance');
    this.organisationalAttributes = Object.values(this.shared.indicators).filter(i => i.type === 'organisation');
  }

  initRibbons(): void {
    const ribbons = [];
    this.playedStrategies
      .filter(s => s.ribbons?.length > 0)
      .forEach(s => s.ribbons.forEach(r => 
        ribbons.push(this.shared.ribbons[r])  
      ));
    this.ribbons = ribbons;
  }

  initPreviousStrategyCards(): void {
    this.previousStrategyCards = (this.previousScenario?.strategies ?? []).map(s => this.shared.strategies[s]);
    this.showPreviousStrategyCards = true;
    this.showStrategyCards = false;
  }

  initStrategyCards(): void {
    this.strategyCards = (this.scenario.strategies ?? []).map(s => this.shared.strategies[s]);
    this.showLoadStrategyCardsDialog = false;
    this.showStrategyCards = true;
  }

  /**************************************
   * USER ACTIONS                       *
   **************************************/

  goToPreviousRound(event?: Event): void {
    this.playedStrategies.pop();
    this.updateUrl();
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
    strategy.flipped = true;
    // This disabled further selection of strategies
    this.inFeedbackPhase = true;
    this.bottomDialog = {
      text: this.t('Start next round'),
      confirm: () => this.executeStrategy(strategy)
    };
  }

  executeStrategy(strategy: Strategy): void {
    this.playedStrategies.push(strategy);
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

  // public resetClick(event?: Event): void {
  //   this.hideOthers(ShowableTopic.ResetConfirmation);
  //   this.showStartOverConfirmation = true;
  //   // To disable background click
  //   if (event)
  //     event.stopPropagation();
  // }

  // public cancelReset(event?: Event): void {
  //   this.showStartOverConfirmation = false;
  //   // To disable background click
  //   if (event)
  //     event.stopPropagation();
  // }

  // public startOverClick(event?: Event): void {
  //   this.hideOthers(ShowableTopic.ResetConfirmation);
  //   setTimeout(() => this.startOver(event), this.options.purchaseDelay);
  // }

  /**************************************
   * URL PARAMS                         *
   **************************************/

  public updateUrl(): void {
    // We use router to save the game data between sessions
    this.router.navigate([{
      [DATA_KEY_VERSION]:    this.shared.settings.version,
      [DATA_KEY_STRATEGIES]: this._encodeIds(this.playedStrategies),
      [DATA_KEY_SHOWREPORT]: this.showReport ? 1 : 0,
    }]);
  }

  public readParams(): void {
    // Only load purchases from route data if the application versions match
    // Otherwise reset the state to handle the going back to an url without params
    if (this.route.snapshot.params?.[DATA_KEY_VERSION] && 
        this.route.snapshot.params[DATA_KEY_VERSION] == this.shared.settings.version) {

      if (this.route.snapshot.params[DATA_KEY_STRATEGIES])
        this.playedStrategies = this._decodeIds(this.route.snapshot.params[DATA_KEY_STRATEGIES]);
      else
        this.playedStrategies = [];

      if (this.route.snapshot.params[DATA_KEY_SHOWREPORT] && 
          this.route.snapshot.params[DATA_KEY_SHOWREPORT] == 1)
        this.showReport = true;
      else
        this.showReport = false;
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
  public t(text: string | LocalizedString): string {
    return this.shared.getText(text);
  }

  // /*
  //  * Get data for the resultChart component to use
  //  */
  // public get resultChartData(): ResultChartData {
  //   throw new Error("Not implemented");
  //   const data = new Array<any>();
  //   const purchases = this.purchasesAndPassedRounds;

  //   // NB. This code is partly copied from getAccumulatedReturns
  //   let balance = this.shared.settings.balance;
  //   for (let i = 0; i <= purchases.length; i++) {
  //     const returns = this.getTotalReturns(purchases.slice(0, i));
  //     balance += returns;
  //     balance -= i === 0 ? 0 : purchases[i - 1].price;
  //     data.push({
  //       round:      i + ROUND_BASE,
  //       balance:    balance,
  //       returns:    returns,
  //       investment: this.t(i === 0 ? 'Start' : (purchases[i - 1] instanceof NullInvestment ? 'Pass' : purchases[i - 1].title))
  //     });
  //   }
  //   return data;
  // }

}