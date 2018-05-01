import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { FlagService } from '../flag.service';
import { Package } from '../package';
import { Design } from '../design';
import { Flag } from '../flag';
import { Order } from '../order';
import { Billing } from '../billing';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  flag:Flag = null;
  fname:string = '';
  lname:string = '';
  design:Design = null;
  pack:Package = null;
  bill:Billing = null;
  order:Order = null;


  constructor(
    private router:Router,
    private bs:BikeService,
    private fs:FlagService
  ) { }

  ngOnInit() {
    this.order = this.bs.loadOrder();
    this.flag = this.order.sticker.flag;
    this.fname = this.order.sticker.fname;
    this.lname = this.order.sticker.lname;
    this.design = this.order.design;
    this.pack = this.order.package;
    this.bill = this.order.billing;
    
  }

  next() {
    this.order.billing = this.bill;
    this.bs.saveOrder(this.order);
    this.router.navigate(['/summary']);
  }

  previous() {
    this.router.navigate(['/package']);
  }

}
