import { Component } from '@angular/core';
import { TaskService } from 'src/app/core/services/task/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'taskManager';

  constructor(private taskService: TaskService) {}

  toggleSidebar(isOpen = undefined) {
    this.taskService.toggleSidebarVisibility(isOpen);
  }
}
