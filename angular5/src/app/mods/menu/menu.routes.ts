import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameAndFlagComponent } from '../bike/name-and-flag/name-and-flag.component';
import { DesignComponent } from '../bike/design/design.component';
import { PackageComponent } from '../bike/package/package.component';
import { BillingComponent } from '../bike/billing/billing.component';
import { SummaryComponent } from '../bike/summary/summary.component';

const routes: Routes = [
    { path: 'name-and-flag', component: NameAndFlagComponent },
    { path: 'design'       , component: DesignComponent },
    { path: 'package'      , component: PackageComponent },
    { path: 'billing'      , component: BillingComponent },
    { path: 'summary'      , component: SummaryComponent },
    { path: ''  , redirectTo: 'name-and-flag', pathMatch: 'full' },
    { path: '**', redirectTo: 'name-and-flag', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MenuRoutes { }

export const appRoutesComponents = [
  NameAndFlagComponent,
  DesignComponent,
  PackageComponent,
  BillingComponent,
  SummaryComponent
];

