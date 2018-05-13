import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { OrderBehavior } from '../behaviors/order-behavior';
import { Billing } from '../models/billing';
import { RequestService } from '../../request/request.service';
import { HttpClient } from '@angular/common/http';
import { IdResult } from '../models/id-result';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent extends OrderBehavior implements OnInit {

  billingFormGroup:FormGroup = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    country: new FormControl(),
  });

  captchaError = false;
  savedAlert = false;
  captchaToken = '';

  constructor(
    private router:Router,
    private http:HttpClient,
    private bs:BikeService,
    private r:RequestService
  ) { 
    super(bs);
  }

  ngOnInit() {
    this.loadOrder();
    this.billingFormGroup.setValue({
      fname:this.order.billing.fname,
      lname:this.order.billing.lname,
      email:this.order.billing.email,
      address:this.order.billing.address,
      phone:this.order.billing.phone,
      city:this.order.billing.city,
      country:this.order.billing.country
    });
    if (!this.order.billing) this.order.billing = new Billing();
  }
  save() {
    this.saveBilling({
      fname: this.billingFormGroup.value.fname,
      lname: this.billingFormGroup.value.lname,
      email: this.billingFormGroup.value.email,
      address: this.billingFormGroup.value.address,
      phone: this.billingFormGroup.value.phone,
      city: this.billingFormGroup.value.city,
      country: this.billingFormGroup.value.country,
      state: '',
      zip: ''
    });
    this.savedAlert = true;
    setTimeout(() => {
      this.savedAlert = false;
    }, 5000);
  }

  handleCorrectCaptcha($event) {
    this.captchaToken = $event;
  }

  handleCaptchaExpired($event) {
    this.captchaToken = '';
  }

  next() {
    this.order.token = this.captchaToken;
    if (this.billingFormGroup.valid) {
      if (this.captchaToken == '') {
        this.captchaError = true;
      } else {
        this.captchaError = false;
        
        this.saveBilling({
          fname: this.billingFormGroup.value.fname,
          lname: this.billingFormGroup.value.lname,
          email: this.billingFormGroup.value.email,
          address: this.billingFormGroup.value.address,
          phone: this.billingFormGroup.value.phone,
          city: this.billingFormGroup.value.city,
          country: this.billingFormGroup.value.country,
          state: '',
          zip: ''
        });
    
        this.http.post<IdResult>('/api/order', this.order).subscribe(result => {
          console.log(result);
          this.router.navigate(['/summary',result.id]);
        }, error => {
          console.error(error);
        });
      }
    }
  }

  previous() {
    this.router.navigate(['/package']);
  }

}
