import { Component, OnInit } from '@angular/core';
import { OrderBehavior } from '../order-behavior';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent extends OrderBehavior implements OnInit {

  constructor(
    private router:Router,
    private bs:BikeService,
    private fs:FlagService) { 
      super(bs);
    }

  ngOnInit() {
    this.loadOrder();
  }

}
