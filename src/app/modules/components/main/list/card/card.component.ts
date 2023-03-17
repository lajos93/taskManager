import { Component, Input } from '@angular/core';
import { initialTaskDetail, ITaskDetail } from 'src/app/core/models/ITaskDetail';
import { TaskService } from 'src/app/core/services/task/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() parentId = <string>'';
  @Input() detail = <ITaskDetail>initialTaskDetail;


  constructor(private taskService:TaskService){

  }

  stuff(){
    this.taskService.setSelectedTask(this.parentId,this.detail.id);
    this.taskService.toggleSidebarVisibility(true)
  }
}
