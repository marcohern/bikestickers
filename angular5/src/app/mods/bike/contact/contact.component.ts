import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IdResult } from '../models/id-result';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactFormGroup:FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    comments: new FormControl()
  });
  sendAlert:boolean = false;
  sendType:string = '';
  sendTimeout:any = null;
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  showSendAlert() {
    this.clearSendTimeout();
    this.sendType = 'success';
    this.sendAlert = true;
    this.sendTimeout = setTimeout(() => {
      this.sendAlert = false;
      this.clearSendTimeout();
    }, 5000);
  }

  showErrorAlert() {
    this.clearSendTimeout();
    this.sendType = 'danger';
    this.sendAlert = true;
    this.sendTimeout = setTimeout(() => {
      this.sendAlert = false;
      this.clearSendTimeout();
    }, 5000);
  }

  clearSendTimeout() {
    if (this.sendTimeout!=null) {
      clearTimeout(this.sendTimeout);
      this.sendTimeout = null;
    }
  }

  send() {
    if (this.contactFormGroup.valid) {
      console.log(this.contactFormGroup.value);
      this.http.post<IdResult>('/api/contact', this.contactFormGroup.value).subscribe(res => {
        console.log(res);
        this.contactFormGroup.reset();
        //this.contactFormGroup.setValue({ name: '', email: '', comments: '' });
        this.showSendAlert();
      }, error => {
        this.showErrorAlert();
        console.error(error);
      });
    } else {
      this.showErrorAlert();
    }
  }

}
