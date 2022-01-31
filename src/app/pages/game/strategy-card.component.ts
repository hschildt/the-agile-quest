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
    trigger('flip', [
      state('visible', style({
          transform: `${PERSPECTIVE} rotateY(0deg)`
        })
      ),
      state('front-hidden', style({
          transform: `${PERSPECTIVE} rotateY(-90deg)`
        })
      ),
      state('back-hidden', style({
          transform: `${PERSPECTIVE} rotateY(90deg)`
        })
      ),
      transition('visible => front-hidden, visible => back-hidden', [
        animate(ANIMATION_DURATION_MS),
      ]),
      transition('front-hidden => visible, back-hidden => visible', [
        animate(ANIMATION_DURATION_WITH_DELAY),
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
  @Input()
  set flipped(value: boolean) {

    if (this._flipped == value)
      return;

    this._flipped = value;

    // Handle triggers for transitions here
    if (this._flipped) {
      this.backFlipTrigger = 'visible';
      this.frontFlipTrigger = 'front-hidden';
    } else {
      this.backFlipTrigger = 'back-hidden';
      this.frontFlipTrigger = 'visible';
    }

  };
  get flipped(): boolean {
    return this._flipped;
  }
  @Input() locked: boolean = false;

  @Output() cardLocked = new EventEmitter<boolean>();

  public backFlipTrigger: string = 'back-hidden';
  public frontFlipTrigger: string = 'visible';
  private _flipped: boolean = false;

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