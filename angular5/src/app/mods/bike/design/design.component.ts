import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { Design } from '../models/design';
import { OrderBehavior } from '../behaviors/order-behavior';
import { designs } from '../constants/designs';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent extends OrderBehavior implements OnInit {

  showErrorMessage:boolean = false;
  designs:Design[] = [];

  constructor(
    private router:Router,
    private bs:BikeService) { 
    super(bs);
    this.designs = designs;
  }

  ngOnInit() {
    this.loadOrder();
    if (this.order.design) {
      this.order.design = this.getSelectedDesign();
      this.order.design.selected = 'btn-primary';
    }
  }

  getSelectedDesign() {
    for (let d of this.designs) {
      if (this.order.design.id == d.id) {
        return d;
      }
    }
    return null;
  }

  selectDesign(design:Design) {
   
    if (this.order.design) this.order.design.selected = 'btn-outline-dark';
    design.selected = 'btn-primary';

    this.saveDesign(design);
  }

  next() {
    if (!this.order.design) {
      return;
    }
    this.router.navigate(['/package']);
  }

  previous() {
    this.router.navigate(['/name-and-flag']);
  }

}
