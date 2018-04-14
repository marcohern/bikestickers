import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './mods/bike/page1/page1.component';
import { Page2Component } from './mods/bike/page2/page2.component';
import { Page3Component } from './mods/bike/page3/page3.component';

const routes: Routes = [
    { path: 'page1'           , component: Page1Component },
    { path: 'page2'           , component: Page2Component },
    { path: 'page3'           , component: Page3Component },
    { path: ''  , redirectTo: 'page1', pathMatch: 'full' },
    { path: '**', redirectTo: 'page1', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutes { }

export const appRoutesComponents = [Page1Component,Page2Component,Page3Component];

