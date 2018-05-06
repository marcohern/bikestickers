import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { OrderBehavior } from '../behaviors/order-behavior';
import { Billing } from '../models/billing';

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

  constructor(
    private router:Router,
    private bs:BikeService
  ) { 
    super(bs);
  }

  ngOnInit() {
    this.loadOrder();
    if (!this.order.billing) this.order.billing = new Billing();
  }

  next() {
    console.log(this.billingFormGroup.value);
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
    //this.saveOrder();
    //this.router.navigate(['/summary']);
  }

  previous() {
    this.router.navigate(['/package']);
  }

}
