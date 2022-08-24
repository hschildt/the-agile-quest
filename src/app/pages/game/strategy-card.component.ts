import { 
  Component, 
  EventEmitter,
  Input,
  OnInit,
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
export type CARD_SIDE = 'pattern' | 'front' | 'back';

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
      state('pattern-hidden', style({
          transform: `${PERSPECTIVE} rotateY(90deg)`
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
      transition('visible => pattern-hidden, visible => front-hidden, visible => back-hidden', [
        animate(ANIMATION_DURATION_MS),
      ]),
      transition('pattern-hidden => visible, front-hidden => visible, back-hidden => visible', [
        animate(ANIMATION_DURATION_WITH_DELAY),
      ]),
    ]),
  ]
})
export class StrategyCardComponent implements OnInit {
  @Input() title: string | LocalizedString = '';
  @Input() description: string | LocalizedString = '';
  @Input() buttonLabel: string | LocalizedString = 'Lock This Strategy';
  @Input() buttonLabelLocked: string | LocalizedString = 'Strategy Locked';
  @Input() titleBack: string | LocalizedString = 'Feedback';
  @Input() descriptionBack: string | LocalizedString = '';
  @Input() disabled: boolean = false;
  @Input() flipped?: boolean = false;
  @Input() hidden?: boolean = false;
  @Input() locked?: boolean = false;
  @Input() animationDelay: number = 0;

  @Output() cardLocked = new EventEmitter<boolean>();

  private _entering: boolean = true;

  constructor(
    private shared: SharedService
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => this._entering = false, 4 * ANIMATION_DURATION_MS + this.animationDelay);
  }

  get side(): CARD_SIDE {
    if (this._entering || (this.hidden && !this.flipped))
      return 'pattern';
    return this.flipped ? 'back' : 'front';
  }

  get backFlipTrigger(): string {
    return this.side == 'back' ? 'visible' : 'back-hidden';
  }

  get frontFlipTrigger(): string {
    return this.side == 'front' ? 'visible' : 'front-hidden';
  }

  get patternFlipTrigger(): string {
    return this.side == 'pattern' ? 'visible' : 'pattern-hidden';
  }

  toggleLocked(): void {
    this.cardLocked.emit(!this.locked);
  }

  /*
   * Localize a string or LocalizedString object
   * See SharedService
   */
  t(text: string | LocalizedString | undefined = '') {
    return this.shared.getText(text);
  }
}