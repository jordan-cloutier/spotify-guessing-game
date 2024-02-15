import { HomeComponent } from './app/home/home.component.js';
import { PlayComponent } from './app/play/play.component.js';
import { AuthService } from './services/auth.service.js';
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
      AuthService
  ]

})
export class Auth { }