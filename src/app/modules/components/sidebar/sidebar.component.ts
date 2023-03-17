import { Component } from '@angular/core';
import { data } from 'src/app/app.component';
import { initialTaskTreeSingleDetail, ITaskTreeSingleDetail } from 'src/app/core/models/ITaskTree';
import { TaskService } from 'src/app/core/services/task/task.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isOpen: boolean = false;
  details: ITaskTreeSingleDetail = initialTaskTreeSingleDetail;

  selected = ''
  data = data;



  constructor(private taskService: TaskService) {
    this.taskService.sidebarVisibilityChange.subscribe(
      (value) => (this.isOpen = value)
    );
    this.taskService.selectedTaskChange.subscribe(value => this.details = value);
  }

  getListNameFromId(id:string){
    return this.taskService.getListNameFromId(id)
  }

  closeSidebar()  {
    this.taskService.toggleSidebarVisibility(false);
  }
  
}
