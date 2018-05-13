import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';
import { RequestModule } from './mods/request/request.module';
import { BikeModule } from './mods/bike/bike.module';

import { AppComponent } from './app.component';
import { ReCaptchaModule } from 'angular5-recaptcha';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BikeModule,
    AppRoutes,
    RequestModule,
    ReCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
