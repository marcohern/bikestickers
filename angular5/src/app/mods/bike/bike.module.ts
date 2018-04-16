import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { BikeService } from './bike.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [ Page1Component, Page2Component, Page3Component],
  providers: [ BikeService ]
})
export class BikeModule { 

}
