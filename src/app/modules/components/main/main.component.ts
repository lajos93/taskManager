import { Component } from '@angular/core';
import { ITaskTree } from 'src/app/core/models/ITaskTree';
import { BackendService } from 'src/app/core/services/backend/backend.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  list: ITaskTree[] = [];

  constructor(private backendService: BackendService) {
    const items = this.backendService.getItems();
    !items && this.backendService.addItems();
    this.backendService.itemValue.subscribe((nextValue) => {
      nextValue ? this.list = JSON.parse(nextValue): this.list = [];
    });
  }
}
