import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { NameAndFlagComponent } from './name-and-flag/name-and-flag.component';
import { BikeService } from './bike.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [ Page2Component, Page3Component, NameAndFlagComponent],
  providers: [ BikeService ]
})
export class BikeModule { 

}
