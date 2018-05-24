import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { OrderBehavior } from '../behaviors/order-behavior';
import { Billing } from '../models/billing';
import { RequestService } from '../../request/request.service';
import { HttpClient } from '@angular/common/http';
import { IdResult } from '../models/id-result';
import { Discount } from '../models/discount';

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
    discount_code: new FormControl()
  });

  discountCodeInvalid:boolean = false;
  savedAlert:boolean = false;
  discountCode: string = '';
  discount:number = 0;

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
    
    if (!this.checkNameAndFlagSet()) this.router.navigate(['/name-and-flag']);
    if (!this.checkDesignSet())      this.router.navigate(['/design']);
    if (!this.checkPackageSet())     this.router.navigate(['/package']);

    this.billingFormGroup.setValue({
      fname:this.order.billing.fname,
      lname:this.order.billing.lname,
      email:this.order.billing.email,
      address:this.order.billing.address,
      phone:this.order.billing.phone,
      city:this.order.billing.city,
      country:this.order.billing.country,
      discount_code: this.order.billing.discountCode
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
      zip: '',

      discountCode: this.billingFormGroup.value.discount_code,
      subtotal: this.order.package.price,
      discount: this.discount,
      total: this.order.package.price - this.discount
    });
    this.savedAlert = true;
    setTimeout(() => {
      this.savedAlert = false;
    }, 5000);
  }

  next() {
    if (this.billingFormGroup.valid) {
      this.saveBilling({
        fname: this.billingFormGroup.value.fname,
        lname: this.billingFormGroup.value.lname,
        email: this.billingFormGroup.value.email,
        address: this.billingFormGroup.value.address,
        phone: this.billingFormGroup.value.phone,
        city: this.billingFormGroup.value.city,
        country: this.billingFormGroup.value.country,
        state: '',
        zip: '',

        discountCode: this.billingFormGroup.value.discount_code,
        subtotal: this.order.package.price,
        discount: this.discount,
        total: this.order.package.price - this.discount
      });
      this.order.date = new Date();
      this.http.post<IdResult>('/api/order', this.bs.toOrder(this.order)).subscribe(result => {
        this.clearOrder();
        this.router.navigate(['/summary',result.ref]);
      }, error => {
        console.error(error);
      });
    }
  }

  onSetDiscountCode() {
    this.discountCodeInvalid = false;
    console.log("onSetDiscountCode",this.billingFormGroup.value.discount_code);
    if (this.billingFormGroup.value.discount_code == '') {
      this.discount = 0;
      this.savePrice(this.order.package.price, '', 0, this.order.package.price);
      return;
    }
    this.http.get<Discount>('/api/discount/'+this.billingFormGroup.value.discount_code).subscribe(result => {
      console.log(result);
      switch(result.type) {
        case 'PERCENT':
          this.discount = this.order.package.price*result.value/100.00;
          break;
        case 'SCALAR':
          this.discount = result.value;
          break;
        default:
          this.discount = 0;
          break;
      }
      this.savePrice(this.order.package.price, this.billingFormGroup.value.discount_code, this.discount, this.order.package.price - this.discount);
    }, error => {
      console.error(error);
      
      this.discount = 0;
      this.billingFormGroup.get('discount_code').setValue('');
      this.savePrice(this.order.package.price, '', 0, this.order.package.price);

      this.discountCodeInvalid = true;
      setTimeout(() => {
        this.discountCodeInvalid = false;
      }, 10000);
    });
  }

  previous() {
    this.router.navigate(['/package']);
  }

}
