import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestService } from './request.service';
import { BasicInterceptor } from './basic-interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[
    RequestService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicInterceptor, multi:true }
  ]
})
export class RequestModule { }
