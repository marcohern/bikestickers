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

import { BikeService } from './bike.service';
import { FlagService } from './flag.service';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  declarations: [ NameAndFlagComponent, DesignComponent, PackageComponent, BillingComponent, CoverComponent, BreadcrumbsComponent, SummaryComponent ],
  providers: [ BikeService,FlagService ]
})
export class BikeModule { 

}
