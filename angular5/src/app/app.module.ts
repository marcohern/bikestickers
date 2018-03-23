import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestModule } from './mods/request/request.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RequestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
