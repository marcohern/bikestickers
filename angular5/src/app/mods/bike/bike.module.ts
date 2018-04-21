import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Page3Component } from './page3/page3.component';
import { NameAndFlagComponent } from './name-and-flag/name-and-flag.component';
import { DesignComponent } from './design/design.component';
import { BikeService } from './bike.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [ Page3Component, NameAndFlagComponent, DesignComponent],
  providers: [ BikeService ]
})
export class BikeModule { 

}
