import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  
  constructor() { }

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
      this.showSendAlert();
    } else {
      this.showErrorAlert();
    }
  }

}
