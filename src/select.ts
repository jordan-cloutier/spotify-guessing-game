import { HomeComponent } from './app/home/home.component.js';
import { PlayComponent } from './app/play/play.component.js';
import { SelectService } from './services/select.service.js';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HomeComponent,
    PlayComponent
  ],
  imports: [
    HomeComponent,
    PlayComponent
  ],
  providers: [
      SelectService
  ]

})
export class Select { }