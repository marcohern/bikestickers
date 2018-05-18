import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { VisualDesign } from '../models/visual-design';
import { OrderBehavior } from '../behaviors/order-behavior';
import { designs } from '../constants/designs';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent extends OrderBehavior implements OnInit {

  showErrorMessage:boolean = false;
  designs:VisualDesign[] = [];

  constructor(
    private router:Router,
    private bs:BikeService) { 
    super(bs);
    this.designs = designs;
  }

  ngOnInit() {
    this.loadOrder();
    if (!this.checkNameAndFlagSet()) this.router.navigate(['/name-and-flag']);
    this.order.design = this.getSelectedOrFirstDesign();
    this.order.design.selected = 'btn-primary';
  }

  getSelectedOrFirstDesign() {
    if (this.order.design) {
      for (let d of this.designs) {
        if (this.order.design.id == d.id) {
          return d;
        }
      }
    }
    return this.designs[0];
  }

  selectDesign(design:VisualDesign) {
   
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
