import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameAndFlagComponent } from './name-and-flag/name-and-flag.component';
import { DesignComponent } from './design/design.component';
import { PackageComponent } from './package/package.component';
import { BillingComponent } from './billing/billing.component';
import { SummaryComponent } from './summary/summary.component';

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
export class BikeRoutes { }

export const appRoutesComponents = [
  NameAndFlagComponent,
  DesignComponent,
  PackageComponent,
  BillingComponent,
  SummaryComponent
];

