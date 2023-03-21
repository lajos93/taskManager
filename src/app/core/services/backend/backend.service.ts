import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ITaskDetail } from '../../models/ITaskDetail';
import { ITaskTree } from '../../models/ITaskTree';
import { TaskService } from '../task/task.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  itemValue = new BehaviorSubject<string | null>(this.taskItems);
  data: ITaskTree[] = [];

  constructor(private taskService: TaskService) {}

  set taskItems(value: string) {
    this.itemValue.next(value); 
    localStorage.setItem('tasks', value);
  }

  get taskItems() {
    const item = localStorage.getItem('tasks');
    return item ? item : '';
  }

  addItems() {
    const generatedStatuses = this.taskService.generateStatus();
    const addItemsToLocalStorage = () => {
      this.data = this.taskService.generateRandomTask(
        generatedStatuses,
        this.data
      );
      this.taskItems = JSON.stringify(this.data);
    };

    const thisScope = this;

    (function loop() {
      const randomIntervalMinVal = 1,
        randomIntervalMaxVal = 3;
      const rand =
        Math.floor(
          Math.random() * (randomIntervalMaxVal - randomIntervalMinVal + 1) +
            randomIntervalMinVal
        ) * 1000;
      if (thisScope.taskService.countAllItems(thisScope.data) < 3) {
        setTimeout(function () {
          addItemsToLocalStorage();
          loop();
        }, rand);
      }
    })();
  }

   getItems():ITaskTree[] | undefined {
    if (
      this.taskItems != '' &&
      this.taskItems != null &&
      typeof this.taskItems != 'undefined'
    )
      return JSON.parse(this.taskItems);
    return undefined
  } 

  removeItems(){
    localStorage.removeItem("tasks");
    localStorage.removeItem("status");
  }
}
