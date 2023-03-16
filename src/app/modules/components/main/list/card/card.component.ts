import { Component, Input } from '@angular/core';
import { ITaskDetail } from 'src/app/core/models/taskDetail';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() detail = <ITaskDetail>{}; // decorate the property with @Input()


}
