import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameAndFlagComponent } from './name-and-flag/name-and-flag.component';
import { DesignComponent } from './design/design.component';
import { PackageComponent } from './package/package.component';
import { BillingComponent } from './billing/billing.component';
import { SummaryComponent } from './summary/summary.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
    { path: 'name-and-flag', component: NameAndFlagComponent },
    { path: 'design'       , component: DesignComponent },
    { path: 'package'      , component: PackageComponent },
    { path: 'billing'      , component: BillingComponent },
    { path: 'summary/:id'  , component: SummaryComponent },
    { path: 'about'        , component: AboutComponent   },
    { path: 'news'         , component: NewsComponent    },
    { path: 'contact'      , component: ContactComponent },
    { path: 'privacy'      , component: PrivacyComponent },
    { path: 'shipping'     , component: ShippingComponent },
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

