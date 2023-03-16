import { Component, Input } from '@angular/core';
import { initialTaskDetal, ITaskDetail } from 'src/app/core/models/taskDetail';
import { TaskService } from 'src/app/core/services/task/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() detail = <ITaskDetail>initialTaskDetal; // decorate the property with @Input()

  constructor(private taskService:TaskService){

  }

  stuff(parentId:string,id:string){
    this.taskService.setSelectedTask(parentId,id);
    this.taskService.toggleSidebarVisibility(true)
  }
}
