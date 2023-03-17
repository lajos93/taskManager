import { Component } from '@angular/core';
import { TaskService } from 'src/app/core/services/task/task.service';

export const data = [
  {
    id: 'a',
    items: [
      {
        id: 'abc-1',
        dueDate: '2020-03-23T04:24:30.576Z',
        title: 'Task 1',
        project: 'Project CBA',
        description: 'this is a great task',
        priority: 1,
        color: 'red',
        sprint: 'Sprint-12',
        createdAt:'2023-05-23T04:24:30.576Z',
        updatedAt:'2023-05-23T04:24:30.576Z',
      },
      {
        id: 'abc-2',
        dueDate: '2020-04-07T04:24:30.576Z',
        title: 'Task 2',
        project: 'Project ABC',
        description: 'This is an awesome task',
        priority: 2,
        color: 'blue',
        sprint: 'Sprint-13',
        createdAt:'2023-05-23T04:24:30.576Z',
        updatedAt:'2023-05-23T04:24:30.576Z',
      },
    ],
  },
  {
    id: 'b',
    items: [
      {
        id: 'abc-3',
        dueDate: '2023-01-22T04:24:30.576Z',
        title: 'Task 3',
        project: 'Project XZY',
        description: 'this is a great task',
        priority: 3,
        color: 'red',
        sprint: 'Sprint-15',
        createdAt:'2023-05-23T04:24:30.576Z',
        updatedAt:'2023-05-23T04:24:30.576Z',
      },
      {
        id: 'abc-4',
        dueDate: '2020-05-07T04:24:30.576Z',
        title: 'Task 4',
        project: 'Project ZYX',
        description: 'This is an awesome task',
        priority: 3,
        color: 'blue',
        sprint: 'Sprint-15',
        createdAt:'2023-05-23T04:24:30.576Z',
        updatedAt:'2023-05-23T04:24:30.576Z',
      },
    ],
  },
];

export const listItem = [
  {
    id: 'a',
    name: 'To Do',
  },
  {
    id: 'b',
    name: 'In Progress',
  },
  {
    id: 'c',
    name: 'Done',
  },
];

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
