import {
  Component,
  OnInit 
} from '@angular/core';
import { 
  LocalizedString,
  SharedService 
} from '../../shared';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.sass']
})
export class TitleScreenComponent implements OnInit {

  constructor(
    private shared: SharedService
  ) { }

  ngOnInit(): void {
  }

  t(text: string | LocalizedString | undefined = '') {
    return this.shared.getText(text);
  }
}
