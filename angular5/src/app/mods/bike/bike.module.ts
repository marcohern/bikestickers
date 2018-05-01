import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
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




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
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
    MenuComponent
  ],
  providers: [ BikeService ],
  exports:[MenuComponent]
})
export class BikeModule { 

}
