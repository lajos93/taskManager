import { Component, Input } from '@angular/core';
import { initialTaskDetail, ITaskDetail } from 'src/app/core/models/ITaskDetail';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() detail = <ITaskDetail>initialTaskDetail;


}
