import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutes } from './menu.routes';
import { BikeModule } from '../bike/bike.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    MenuRoutes,
    BikeModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule { }
