import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from '../bike/page2/page2.component';
import { Page3Component } from '../bike/page3/page3.component';
import { NameAndFlagComponent } from '../bike/name-and-flag/name-and-flag.component';

const routes: Routes = [
    { path: 'name-and-flag', component: NameAndFlagComponent },
    { path: 'page2'           , component: Page2Component },
    { path: 'page3'           , component: Page3Component },
    { path: ''  , redirectTo: 'name-and-flag', pathMatch: 'full' },
    { path: '**', redirectTo: 'name-and-flag', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MenuRoutes { }

export const appRoutesComponents = [Page2Component,Page3Component,NameAndFlagComponent];

