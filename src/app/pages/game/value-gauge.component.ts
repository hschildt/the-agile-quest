import { 
  Component, 
  Input
} from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition 
} from '@angular/animations';
import { 
  ANIMATION_EASING,
  LocalizedString,
  SharedService
} from '../../shared';

export type ValueGaugeType = 'bar' | 'dot';

const ANIMATION_TIMING_XL = `700ms ${ANIMATION_EASING}`;


/*
 * Show indicator values as either bars or dots on an axis.
 */

@Component({
  selector: 'app-value-gauge',
  templateUrl: './value-gauge.component.html',
  styleUrls: ['./value-gauge.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(ANIMATION_TIMING_XL, style({
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
        }),
        animate(ANIMATION_TIMING_XL, style({
          opacity: 0,
        })),
      ]),
    ]),
    trigger('growInOut', [
      transition('void => positive', [
        style({
          width: 0
        }),
        animate(ANIMATION_TIMING_XL, style({
          width: '*'
        })),
      ]),
      transition('void => negative', [
        style({
          transformOrigin: 'right',
          transform: 'scaleX(0)'
        }),
        animate(ANIMATION_TIMING_XL, style({
          transform: 'scaleX(1)'
        })),
        style({
          transformOrigin: 'left'
        })
      ]),
      transition('positive => negative', [
        style({
          transform: 'scaleX(1)'
        }),
        animate(ANIMATION_TIMING_XL, style({
          transform: 'scaleX(0)'
        })),
        style({
          transformOrigin: 'right'
        }),
        animate(ANIMATION_TIMING_XL, style({
          transform: 'scaleX(1)'
        })),
        style({
          transformOrigin: 'left'
        })
      ]),
      transition('negative => positive', [
        style({
          width: '*'
        }),
        animate(ANIMATION_TIMING_XL, style({
          width: 0
        })),
        style({
          transform: 'scaleX(0)',
          width: '*'
        }),
        animate(ANIMATION_TIMING_XL, style({
          transform: 'scaleX(1)'
        })),
      ]),
      transition(':leave', [
        style({
          transform: 'scaleX(1)'
        }),
        animate(ANIMATION_TIMING_XL, style({
          transform: 'scaleX(0)'
        })),
      ]),
    ])
  ]
})
export class ValueGaugeComponent {

  private _hidePreviousValueBar = false;
  private _max: number = 10;
  private _min: number = 0;
  private _value: number = 0;
  private _previousValue: number = 0;

  @Input('max')
  set max(value: number | undefined) {
    this._max = value ?? 10;
  }
  @Input('min')
  set min(value: number | undefined) {
    this._min = value ?? 0;
  }
  @Input('value')
  set value(value: number | undefined) {
    this._previousValue = this._value ?? 0;
    this._value = value ?? 0;
  }
  @Input() showPreviousValueTimeMS: number = 2500;
  @Input() titleBottom?: string | LocalizedString;
  @Input() titleTop?: string | LocalizedString;
  @Input() type: ValueGaugeType = 'bar';

  constructor(
    private shared: SharedService
  ) {
  }

  /* Call this to save the current value as previous value
     and clear any delta effects. */
  updatePreviousValue(): void {
    this.shared.processQueue([
      () => {
        this._hidePreviousValueBar = false;
        this._previousValue = this._value ?? 0;
      },
      this.showPreviousValueTimeMS,
      () => this._hidePreviousValueBar = true
    ])
  }

  get value(): number {
    return this._value;
  }

  get min(): number {
    return this._min;
  }

  get max(): number {
    return this._max;
  }

  get previousValue(): number {
    return this._previousValue;
  }

  get isDot(): boolean {
    return this.type === 'dot';
  }

  get isBar(): boolean {
    return this.type === 'bar';
  }

  get valueFraction(): number {
    if (this.range === 0)
      return 0;
    return (this.value - this.min) / this.range;
  }

  get previousValueFraction(): number {
    if (this.range === 0 || this.previousValue == null)
      return 0;
    return (this.previousValue - this.min) / this.range;
  }

  get range(): number {
    return this.max - this.min;
  }

  get valueBarWidth(): string {
    return `${this.valueFraction * 100}%`;
  }

  get valueBarChangeTrigger(): string {
    return this.valueChange < 0 ? 'negative' : 'positive';
  }

  get previousValueLeft(): string {
    return this.isDot ? 
      this._calcDotPercentage(this.previousValueFraction) : 
      (this.valueChange < 0 ?
        `${(this.previousValueFraction + this.valueChange) * 100}%` :
        `${this.previousValueFraction * 100}%`
      );
  }

  get valueChange(): number {
    return this.valueFraction - this.previousValueFraction;
  }

  get valueChangeWidth(): string {
    return `${Math.abs(this.valueChange) * 100}%`;
  }

  get valueDotLeft(): string {
    return this._calcDotPercentage(this.valueFraction);
  }

  get showPreviousValue(): boolean {
    return this.previousValue != null && this.valueChange != 0 && !this._hidePreviousValueBar;
  }

  // get previousValueDotLeft(): string {
  //   const margin = 10;
  //   return `${margin + this.valueFraction * (100 - 2 * margin)}%`;
  // }

  _calcDotPercentage(fraction: number): string {
    const margin = 10;
    return `${margin + fraction * (100 - 2 * margin)}%`;
  }

  /*
   * Localize a string or LocalizedString object
   * See SharedService
   */
  t(text: string | LocalizedString | undefined = '') {
    return this.shared.getText(text);
  }
}