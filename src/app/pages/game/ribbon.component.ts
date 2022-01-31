import { 
  Component, 
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { 
  LocalizedString,
  SharedService
} from '../../shared';


/*
 * Show a strategy card that can be flipped over to see the feedback.
 */

@Component({
  selector: 'app-ribbon',
  template: `<label>{{ t(title) }}</label>`,
  styleUrls: ['./ribbon.component.sass']
})
export class RibbonComponent {

  @Input() title: string = '';

  constructor(
    private shared: SharedService
  ) {
  }

  /*
   * Localize a string or LocalizedString object
   * See SharedService
   */
  t(text: string | LocalizedString): string {
    return this.shared.getText(text);
  }
}