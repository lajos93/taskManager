import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  isSidebarVisible: boolean = false;

  constructor() {
    this.sidebarVisibilityChange.subscribe((value: boolean) => {
      this.isSidebarVisible = value;
    });
  }

  toggleSidebarVisibility(isOpen?: boolean) {
    this.sidebarVisibilityChange.next(isOpen ? isOpen : !this.isSidebarVisible);
  }
}
