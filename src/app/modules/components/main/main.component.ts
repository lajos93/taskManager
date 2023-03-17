import { Component } from '@angular/core';
import { data } from 'src/app/app.component';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  data = data;
}
