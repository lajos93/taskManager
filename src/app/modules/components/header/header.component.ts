import { Component } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  constructor(private backendService: BackendService) {
   /*  const items = this.backendService.getItems();
    !items && this.backendService.addItems(); */

  }

  resetList(){
    this.backendService.removeItems();
    this.backendService.taskItems = ''
  
  }

}
