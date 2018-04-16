import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';
import { RequestModule } from './mods/request/request.module';
import { MenuModule } from './mods/menu/menu.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutes,
    MenuModule,
    RequestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
