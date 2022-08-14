import { 
  Component, 
  Input
} from '@angular/core';
import { 
  LocalizedString,
  SharedService
} from '../../shared';

export type ValueGaugeType = 'bar' | 'dot';

/*
 * Show indicator values as either bars or dots on an axis.
 */

@Component({
  selector: 'app-value-gauge',
  templateUrl: './value-gauge.component.html',
  styleUrls: ['./value-gauge.component.sass']
})
export class ValueGaugeComponent {

  private _max: number = 10;
  @Input('max')
  set max(value: number | undefined) {
    this._max = value ?? 10;
  }
  private _min: number = 0;
  @Input('min')
  set min(value: number | undefined) {
    this._min = value ?? 0;
  }
  private _value: number = 0;
  @Input('value')
  set value(value: number | undefined) {
    this._value = value ?? 0;
  }
  @Input() previousValue?: number;
  @Input() titleBottom?: string | LocalizedString;
  @Input() titleTop?: string | LocalizedString;
  @Input() type: ValueGaugeType = 'bar';

  constructor(
    private shared: SharedService
  ) {
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

  get previousValueLeft(): string {
    return this.isDot ? 
      this._calcDotPercentage(this.previousValueFraction) :
      `${this.previousValueFraction * 100}%`;
  }

  // get valueChange(): number {
  //   return this.valueFraction - this.previousValueFraction;
  // }

  // get valueChangeWidth(): string {
  //   return `${Math.abs(this.valueChange) * 100}%`;
  // }

  get valueDotLeft(): string {
    return this._calcDotPercentage(this.valueFraction);
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