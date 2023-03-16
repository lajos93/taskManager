import { Component } from '@angular/core';
import { initialTaskDetal, ITaskDetail } from 'src/app/core/models/taskDetail';
import { TaskService } from 'src/app/core/services/task/task.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isOpen: boolean = false;
  details: ITaskDetail = initialTaskDetal;

  constructor(private taskService: TaskService) {
    this.taskService.sidebarVisibilityChange.subscribe(
      (value) => (this.isOpen = value)
    );
    this.taskService.selectedTaskChange.subscribe(value => this.details = value);
  }
}
