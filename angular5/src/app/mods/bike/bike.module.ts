import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReCaptchaModule } from 'angular5-recaptcha';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NameAndFlagComponent } from './name-and-flag/name-and-flag.component';
import { DesignComponent } from './design/design.component';
import { PackageComponent } from './package/package.component';
import { BillingComponent } from './billing/billing.component';
import { CoverComponent } from './cover/cover.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SummaryComponent } from './summary/summary.component';
import { MenuComponent } from './menu/menu.component';

import { BikeService } from './bike.service';
import { BikeRoutes } from './bike.routes';
import { StickerComponent } from './sticker/sticker.component';
import { RequestModule } from '../request/request.module';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ShippingComponent } from './shipping/shipping.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RequestModule,
    ReCaptchaModule,
    BikeRoutes
  ],
  declarations: [
    NameAndFlagComponent,
    DesignComponent,
    PackageComponent,
    BillingComponent,
    CoverComponent,
    BreadcrumbsComponent,
    SummaryComponent,
    MenuComponent,
    StickerComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    PrivacyComponent,
    ShippingComponent
  ],
  providers: [ BikeService ],
  exports:[MenuComponent]
})
export class BikeModule { 

}
