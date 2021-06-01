import { 
  EventEmitter,
  Inject,
  Injectable,
  LOCALE_ID 
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  BehaviorSubject,
  forkJoin 
} from 'rxjs';
import { map } from 'rxjs/operators';
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
export const DEFAULT_LOCALE = 'en-US';
export const PERSPECTIVE: string = 'perspective(1000px)';
const SETTINGS_URL = 'assets/data/settings.json';
const TEXTS_URL = 'assets/data/texts.json';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  error = new EventEmitter<string>();
  firstScenario: Scenario;
  indicators: {[id: string]: Indicator} = {};
  ready = new BehaviorSubject<boolean>(false);
  ribbons: {[id: string]: Ribbon} = {};
  scenarios: {[id: string]: Scenario} = {};
  settings: {
    version: number,
    rounds: number,
  };
  strategies: {[id: string]: Strategy} = {};
  texts: Texts;

  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) public locale: string
  ) {
    this.loadData();
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

    for (const list of ['indicators', 'ribbons', 'scenarios', 'strategies'])
      this[list] = this.processJsonList(settings[list]);

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
   * Return the prompt text in current locale or the text itself if that's not available.
   * If text is a localized string, select the correct localized version or use the default.
   * Note that if the text is to contain any HTML markup, it should be used as a bound
   * property, i.e., <span [innerHTML]="shared.getText('Text')"></span>. It will be 
   * sanitized by Angular but basic formatting and links are allowed, at least.
   */
  public getText(text: string | LocalizedString): string {
    if (text == null)
      return "";
    else if (typeof text === "string")
      return this.texts[text]?.[this.locale] ?? text;
    else
      return text[this.locale] ?? text[DEFAULT_LOCALE];
  }

}
