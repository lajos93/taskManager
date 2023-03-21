import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { data, listItem } from 'src/app/app.component';
import { initialTaskDetail, ITaskDetail } from '../../models/ITaskDetail';
import {
  initialTaskTreeSingleDetail,
  IStatus,
  ITaskTree,
  ITaskTreeSingleDetail,
} from '../../models/ITaskTree';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  isSidebarVisible: boolean = false;

  selectedTaskChange: Subject<ITaskTreeSingleDetail> =
    new Subject<ITaskTreeSingleDetail>();
  selectedTask: ITaskTreeSingleDetail = initialTaskTreeSingleDetail;


  //random task generator
  taskToGenerate: ITaskDetail = initialTaskDetail;
  //status as an extension of task
  statusListParsedChange: Subject<IStatus[]> = new Subject<IStatus[]>();
  statusParsedVal: IStatus[] = [];


  constructor() {
    this.sidebarVisibilityChange.subscribe((value: boolean) => {
      this.isSidebarVisible = value;
    });
  }

  set statusList(value: string) {
    localStorage.setItem('status', value);
  }

  get statusList() {
    const item = localStorage.getItem('status');
    return item ? item : '';
  }

  toggleSidebarVisibility(isOpen?: boolean) {
    this.sidebarVisibilityChange.next(isOpen ? isOpen : !this.isSidebarVisible);
  }

  setSelectedTask(parentId: string, id: string,data?:ITaskTree[]) {
    const parent = data?.find((it: ITaskTree) => it.id === parentId);
    const detail = parent?.items.find((it) => it.id === id);

    if (parent && detail)
      this.selectedTaskChange.next({ id: parentId, items: detail });
  }

  getStatusList () {
    return this.statusList && JSON.parse(this.statusList);
  }

  getListNameFromId(id: string) {
    return this.statusList && JSON.parse(this.statusList)?.find((it:IStatus) => it.id === id)?.name;
  }

  //random task generator
  private generateId() {
    return Math.random().toString(16).slice(2);
  }

  private generateDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  private generateCardBasicInfos() {
    const items = [
      {
        project: 'Design',
        title: 'Design interface',
        description:
          ' The interface should be intuitive and user-friendly and fit the described use case.',
      },
      {
        project: 'Coding-789',
        title: 'Set up task generator',
        description:
          'Tasks are created at a random time interval and should become visible to the UI.',
      },
      {
        project: 'Coding-123',
        title: 'Setup main card component',
        description: 'The cards should contain titles, description etc..',
      },
      {
        project: 'Coding-123',
        title: 'Set up detail component(sidebar)',
        description: 'The task details should appear in a sidebar',
      },
      {
        project: 'Coding-123',
        title: 'Set up header component',
        description:
          'The header should contain a Title(logo) and the number of tasks',
      },
      {
        project: 'Coding-123',
        title: 'Add priorities to each task',
        description:
          'The tasks should have priorities in the following format "1, 2, 3, 1, 2, 3" (so first added task has priority 1, second added task has 2, and so on',
      },
    ];
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
  }

  private generatePriority() {
    const items = [1, 2, 3];
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
  }

  private generateSprint() {
    const items = [
      'PROTOTYPE-01',
      'PROTOTYPE-02',
      'PROTOTYPE-03',
      'PROD-01',
      'PROD-02',
    ];
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
  }

  
  public generateStatus() {
    const items = [
      { id: this.generateId(), name: 'To Do' },
      { id: this.generateId(), name: 'In Progress' },
      { id: this.generateId(), name: 'Done' },
    ];
   
    this.statusList = JSON.stringify(items)
    this.statusListParsedChange.next(items)
    return items;
  }


  private generateCurrentStatus(statusList:IStatus[]) {
    const item = statusList[Math.floor(Math.random() * statusList.length)];
    return item;
  }

  private generateColor() {
    const items = ['red', 'blue', 'grey', 'green', 'yellow'];
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
  }

  generateRandomTask(statusList:IStatus[],alreadyAddedData:ITaskTree[]): ITaskTree[] {
    const cardBasicInfos = this.generateCardBasicInfos();
    const generatedTask = {
      id: this.generateId(),
      dueDate: this.generateDate(new Date(2024, 7, 1), new Date(2024, 8, 31)),
      title: cardBasicInfos.title,
      description: cardBasicInfos.description,
      project: cardBasicInfos.project,
      color: this.generateColor(),
      createdAt: new Date(),
    };

    const currentStatusId = this.generateCurrentStatus(statusList).id;

    const statusAlreadyHasData = alreadyAddedData.find(taskTree=>taskTree.id === currentStatusId);

    return statusAlreadyHasData ? [{...statusAlreadyHasData,items:[...statusAlreadyHasData.items,generatedTask]}] : [...alreadyAddedData,{ id: currentStatusId, items: [generatedTask] }]
 
  }
  
  countAllItems(itemsTree:ITaskTree[]){
    return itemsTree.flatMap(itemTree => itemTree.items).length
  }
}
