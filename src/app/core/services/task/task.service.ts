import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { data, listItem } from 'src/app/app.component';
import { initialTaskDetail, ITaskDetail } from '../../models/ITaskDetail';
import { initialTaskTreeSingleDetail, ITaskTree, ITaskTreeSingleDetail } from '../../models/ITaskTree';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  isSidebarVisible: boolean = false;

  selectedTaskChange: Subject<ITaskTreeSingleDetail> = new Subject<ITaskTreeSingleDetail>();
  selectedTask: ITaskTreeSingleDetail = initialTaskTreeSingleDetail

  constructor() {
    this.sidebarVisibilityChange.subscribe((value: boolean) => {
      this.isSidebarVisible = value;
    });

    this.selectedTaskChange.subscribe((value: ITaskTreeSingleDetail) => {
      this.selectedTask = value;
    });
  }

  toggleSidebarVisibility(isOpen?: boolean) {
    this.sidebarVisibilityChange.next(isOpen ? isOpen : !this.isSidebarVisible);
  }

  setSelectedTask (parentId: string,id:string) {
    const parent = data.find((it:ITaskTree) => it.id === parentId);
    const detail = parent?.items.find(it=>it.id===id);

    if(parent && detail) this.selectedTaskChange.next({id:parentId,items:detail});
  };

  getListNameFromId (id:string){
    return listItem.find(it=>it.id===id)?.name

  } 
}
