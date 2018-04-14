import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes } from './app.routes';
import { RequestModule } from './mods/request/request.module';
import { BikeModule } from './mods/bike/bike.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    AppRoutes,
    RequestModule,
    BikeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
