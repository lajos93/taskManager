import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './modules/components/main/main.component';
import { SidebarComponent } from './modules/components/sidebar/sidebar.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { ProgressBarComponent } from './modules/components/header/progress-bar/progress-bar.component';
import { CardComponent } from './modules/components/main/list/card/card.component';
import { ListComponent } from './modules/components/main/list/list.component';
import { AppComponent } from './app.component';
import { InfoComponent } from './modules/components/sidebar/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressBarComponent,
    CardComponent,
    ListComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,MatProgressSpinnerModule,MatIconModule,MatButtonModule,MatSelectModule ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
