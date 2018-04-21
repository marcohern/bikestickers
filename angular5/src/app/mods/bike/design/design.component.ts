import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { Flag } from '../flag';
import { Order } from '../order';
import { Design } from '../design';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  flag:Flag = null;
  fname:string = '';
  lname:string = '';
  order:Order = null;
  design:Design = null;

  designs:Design[] = [
    {id:1, code:"sticker_bardet"  , name:"Romain Bardet"},
    {id:2, code:"sticker_contador", name:"Alberto Contador"},
    {id:3, code:"sticker_nairo"   , name:"Nairo Quintana"}
  ];

  constructor(private router:Router, private bs:BikeService) { }

  ngOnInit() {

    this.order = this.bs.loadOrder();
    this.flag = this.order.sticker.flag;
    this.fname = this.order.sticker.fname;
    this.lname = this.order.sticker.lname;
    this.design = this.order.design;
  }

  selectDesign(design:Design) {
    console.log(design);
    this.design = design;
    this.order.design = design;
    this.bs.saveOrder(this.order);
    this.next();
  }

  next() {
    this.router.navigate(['/package']);
  }

  previous() {
    this.router.navigate(['/name-and-flag']);
  }

}
