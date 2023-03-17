import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/core/services/task/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() item = <any>{name:'',items:[]};

  constructor(private taskService: TaskService) {}

  getListNameFromId(id:string){
    return this.taskService.getListNameFromId(id)
  }

}
