import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { data } from 'src/app/modules/components/main/main.component';
import { initialTaskDetal, ITaskDetail } from '../../models/taskDetail';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  isSidebarVisible: boolean = false;

  selectedTaskChange: Subject<ITaskDetail> = new Subject<ITaskDetail>();
  selectedTask: ITaskDetail = initialTaskDetal

  constructor() {
    this.sidebarVisibilityChange.subscribe((value: boolean) => {
      this.isSidebarVisible = value;
    });

    this.selectedTaskChange.subscribe((value: ITaskDetail) => {
      this.selectedTask = value;
    });
  }

  toggleSidebarVisibility(isOpen?: boolean) {
    this.sidebarVisibilityChange.next(isOpen ? isOpen : !this.isSidebarVisible);
  }

  setSelectedTask = (parentId: string,id:string) => {
    const hero = data.find((it) => it.id === parentId)?.items.find(it=>it.id===id);
    hero && this.selectedTaskChange.next(hero);
  };
}
