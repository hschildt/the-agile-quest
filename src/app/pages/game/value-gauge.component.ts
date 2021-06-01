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

  @Input() max: number = 10;
  @Input() min: number = 0;
  @Input() previousValue: number = undefined;
  @Input() type: ValueGaugeType = 'bar';
  @Input() titleBottom: string;
  @Input() titleTop: string;
  @Input() value: number = 0;

  constructor(
    private shared: SharedService
  ) {
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
    if (this.range === 0)
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
  t(text: string | LocalizedString): string {
    return this.shared.getText(text);
  }
}