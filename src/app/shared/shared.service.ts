import { 
  EventEmitter,
  Inject,
  Injectable,
  LOCALE_ID,
  OnDestroy
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  ActivatedRoute,
  NavigationEnd,
  Router 
} from '@angular/router';
import { 
  BehaviorSubject,
  forkJoin ,
  Subscription
} from 'rxjs';
import { 
  filter,
  map 
} from 'rxjs/operators';
import { 
  Indicator,
  LocalizedString,
  Ribbon,
  Scenario,
  Settings,
  Strategy,
  Texts 
} from './shared.types';


export const ANIMATION_DURATION_MS: number = 225;
export const ANIMATION_DURATION: string = ANIMATION_DURATION_MS + 'ms';
export const ANIMATION_EASING: string = 'cubic-bezier(0.4, 0, 0.2, 1)'
export const ANIMATION_TIMING: string = `${ANIMATION_DURATION} ${ANIMATION_EASING}`;
export const ANIMATION_TIMING_DELAYED: string = `${ANIMATION_DURATION} ${ANIMATION_DURATION} ${ANIMATION_EASING}`;
export const DATA_KEY_LOCALE = 'lang';
export const DEFAULT_LOCALE = 'en-US';
export const PERSPECTIVE: string = 'perspective(1000px)';
const SETTINGS_URL = 'assets/data/settings.json';
const TEXTS_URL = 'assets/data/texts.json';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnDestroy{

  error = new EventEmitter<string>();
  firstScenario!: Scenario;
  indicators: {[id: string]: Indicator} = {};
  locale: string = '';
  ready = new BehaviorSubject<boolean>(false);
  ribbons: {[id: string]: Ribbon} = {};
  scenarios: {[id: string]: Scenario} = {};
  settings!: {
        version: number;
        rounds: number;
    };
  strategies: {[id: string]: Strategy} = {};
  texts!: Texts;

  private _subscriptions = new Array<Subscription>();

  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) systemLocale: string,
    private route:     ActivatedRoute,
    private router:    Router
  ) {
    this.locale = systemLocale;
    this.readLocale();
    this.loadData();
    this._subscriptions.push(
      this.router.events.pipe(
        filter(evt => evt instanceof NavigationEnd)
      ).subscribe(() => this.readLocale())
    );
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  public readLocale(): void {
    if (this.route.snapshot.queryParams?.[DATA_KEY_LOCALE])
      this.locale = this.route.snapshot.queryParams[DATA_KEY_LOCALE];
  }

  public loadData(): void {
    forkJoin([
      this.http.get<Settings>(SETTINGS_URL).pipe(
        map(d => {
          this.processSettings(d);
          return true;
        })
      ), 
      this.http.get<Texts>(TEXTS_URL).pipe(
        map(d => {
          this.texts = d;
          return true;
        })
      ), 
    ]).subscribe(_ => this.ready.next(true));
  }

  /*
   * Process the whole settings json object
   */
  public processSettings(settings: Settings): void {
    this.settings = {
      version: settings.version,
      rounds:  settings.rounds
    };
    this.indicators = this.processJsonList(settings.indicators);
    this.ribbons = this.processJsonList(settings.ribbons);
    this.scenarios = this.processJsonList(settings.scenarios);
    this.strategies = this.processJsonList(settings.strategies);
    this.firstScenario = settings.scenarios[0];
  }

  /*
   * Create proper objects from settings.json sublists
   */
  public processJsonList(data: Array<any>): {[id: string]: any} {
    const dict: {[id: string]: any} = {};
    data.forEach(d => 
      dict[d.id] = d
    );
    return dict;
  }

  /*
   * Test if the given ribbon's criteria are met.
   */
  public checkRibbon(ribbon: Ribbon): boolean {
    for (const c of ribbon.criteria) {
      const cv = this.indicators[c.indicatorId].value ?? 0,
            op = c.operator,
            tv = c.value;
      if ((op === "eq" && cv != tv) ||
          (op === "lt" && cv >= tv) ||
          (op === "gt" && cv <= tv))
        return false;
    }
    return true;
  }

  /*
   * Return the prompt text in current locale or the text itself if that's not available.
   * If text is a localized string, select the correct localized version or use the default.
   * Note that if the text is to contain any HTML markup, it should be used as a bound
   * property, i.e., <span [innerHTML]="shared.getText('Text')"></span>. It will be 
   * sanitized by Angular but basic formatting and links are allowed, at least.
   */
  public getText(text: string | LocalizedString | undefined = ""): string {
    let localized: LocalizedString;
    if (text == null) {
      return "";
    } else if (typeof text === "string") {
      if (text in this.texts)
        localized = this.texts[text];
      else
        return text;
    } else {
      localized = text;
    }
    return localized[this.locale] ?? localized[DEFAULT_LOCALE];
  }

}
