import { Component, OnInit } from '@angular/core';
import { OrderBehavior } from '../behaviors/order-behavior';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent extends OrderBehavior implements OnInit {

  constructor(
    private router:Router,
    private bs:BikeService) { 
      super(bs);
    }

  ngOnInit() {
    this.loadOrder();
  }

  adjustOrder() {
    this.router.navigate(['/name-and-flag']);
  }

}
