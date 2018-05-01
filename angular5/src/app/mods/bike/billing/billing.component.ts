import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { FlagService } from '../flag.service';
import { Package } from '../package';
import { Design } from '../design';
import { Flag } from '../flag';
import { Order } from '../order';
import { Billing } from '../billing';
import { OrderBehavior } from '../order-behavior';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent extends OrderBehavior implements OnInit {

  constructor(
    private router:Router,
    private bs:BikeService,
    private fs:FlagService
  ) { 
    super(bs);
  }

  ngOnInit() {
    this.loadOrder();
    
  }

  next() {
    this.saveOrder();
    this.router.navigate(['/summary']);
  }

  previous() {
    this.router.navigate(['/package']);
  }

}
