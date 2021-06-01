import { 
  Component, 
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition 
} from '@angular/animations';
import { 
  ANIMATION_DURATION_MS,
  PERSPECTIVE,
  LocalizedString,
  SharedService
} from '../../shared';

const ANIMATION_DURATION_WITH_DELAY = `${ANIMATION_DURATION_MS}ms ${ANIMATION_DURATION_MS}ms`;

/*
 * Show a strategy card that can be flipped over to see the feedback.
 */

@Component({
  selector: 'app-strategy-card',
  templateUrl: './strategy-card.component.html',
  styleUrls: ['./strategy-card.component.sass'],
  animations: [
    trigger('backFlip', [
      transition(':enter', [
        style({
          transform: `${PERSPECTIVE} rotateY(90deg)`
        }),
        animate(ANIMATION_DURATION_WITH_DELAY, style({
          transform: `${PERSPECTIVE} rotateY(0deg)`
        })),
      ]),
      transition(':leave', [
        style({
          transform: `${PERSPECTIVE} rotateY(0deg)`
        }),
        animate(ANIMATION_DURATION_MS, style({
          transform: `${PERSPECTIVE} rotateY(90deg)`
        })),
      ]),
    ]),
    trigger('frontFlip', [
      transition(':leave', [
        style({
          transform: `${PERSPECTIVE} rotateY(0deg)`
        }),
        animate(ANIMATION_DURATION_MS, style({
          transform: `${PERSPECTIVE} rotateY(-90deg)`
        })),
      ]),
    ]),
  ]
})
export class StrategyCardComponent {

  @Input() id: string = null;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonLabel: string = 'Lock This Strategy';
  @Input() buttonLabelLocked: string = 'Strategy Locked';
  @Input() titleBack: string = 'Feedback';
  @Input() descriptionBack: string = '';
  @Input() disabled: boolean = false;
  @Input() flipped: boolean = false;
  @Input() locked: boolean = false;

  @Output() cardLocked = new EventEmitter<boolean>();

  constructor(
    private shared: SharedService
  ) {
  }

  toggleLocked(): void {
    this.cardLocked.emit(!this.locked);
  }

  /*
   * Localize a string or LocalizedString object
   * See SharedService
   */
  t(text: string | LocalizedString): string {
    return this.shared.getText(text);
  }
}