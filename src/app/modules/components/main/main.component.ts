import { Component } from '@angular/core';

export const data = [
  {
    id: 'a',
    name: 'To Do',
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
      },
    ],
  },
  {
    id: 'b',
    name: 'In Progress',
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
      },
      {
        id: 'abc-4',
        dueDate: '2020-05-07T04:24:30.576Z',
        title: 'Task 4',
        project: 'Project ZYX',
        description: 'This is an awesome task',
        priority: 3,
        color: 'blue',
      },
    ],
  },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  data = data;
}
