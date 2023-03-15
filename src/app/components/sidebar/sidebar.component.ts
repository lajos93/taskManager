import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpen: boolean = false;

    constructor(private taskService: TaskService) {
        this.taskService.sidebarVisibilityChange.subscribe(value => this.isOpen = value);
    }
}
