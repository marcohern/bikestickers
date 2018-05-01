import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { FlagService } from '../flag.service';
import { Flag } from '../flag';
import { Order } from '../order';
import { Design } from '../design';
import { OrderBehavior } from '../order-behavior';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent extends OrderBehavior implements OnInit {

  designs:Design[] = [
    {id:1, code:"sticker_bardet"  , name:"Romain Bardet"   , price:0, selected:'btn-outline-dark'},
    {id:2, code:"sticker_contador", name:"Alberto Contador", price:0, selected:'btn-outline-dark'},
    {id:3, code:"sticker_nairo"   , name:"Nairo Quintana"  , price:0, selected:'btn-outline-dark'}
  ];

  constructor(
    private router:Router,
    private bs:BikeService,
    private fs:FlagService) { 
    super(bs);
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
