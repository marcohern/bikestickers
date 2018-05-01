import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { FlagService } from '../flag.service';
import { Design } from '../design';
import { OrderBehavior } from '../order-behavior';
import { designs } from '../designs';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent extends OrderBehavior implements OnInit {

  designs:Design[] = [];

  constructor(
    private router:Router,
    private bs:BikeService,
    private fs:FlagService) { 
    super(bs);
    this.designs = designs;
  }

  ngOnInit() {
    this.loadOrder();
  }

  selectDesign(design:Design) {
   
    this.order.design.selected = 'btn-outline-dark';
    design.selected = 'btn-primary';

    this.order.design = design;
    this.saveOrder();
  }

  next() {
    this.router.navigate(['/package']);
  }

  previous() {
    this.router.navigate(['/name-and-flag']);
  }

}
