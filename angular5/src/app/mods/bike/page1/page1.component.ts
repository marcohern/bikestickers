import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { Flag } from '../flag';
import { Order } from '../order';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  flags:Flag[] = [
    {"selector":"flag-colombia" , "name":"colombia" , "code":"CO"},
    {"selector":"flag-iran"     , "name":"iran"     , "code":"IR"},
    {"selector":"flag-argentina", "name":"argentina", "code":"AR"},
    {"selector":"flag-ukraine"  , "name":"ukraine"  , "code":"UA"},
    {"selector":"flag-germany"  , "name":"germany"  , "code":"DE"},
    {"selector":"flag-hong-kong", "name":"hong kong", "code":"HK"},
    {"selector":"flag-united-arab-emirates", "name":"united arab emirates", "code":"AE"},
    {"selector":"flag-laos"     , "name":"laos"     , "code":"LA"},
    {"selector":"flag-ireland"  , "name":"ireland"  , "code":"IE"},
    {"selector":"flag-greece"   , "name":"greece"   , "code":"GR"},
    {"selector":"flag-denmark"  , "name":"denmark"  , "code":"DK"},
    {"selector":"flag-sweden"   , "name":"sweden"   , "code":"SE"}
  ];

  flag:Flag = null;
  fname:string = '';
  lname:string = '';
  order:Order = null;

  constructor(private router:Router, private bs:BikeService) { }

  ngOnInit() {
    this.order = this.bs.loadOrder();
    this.flag  = this.order.sticker.flag;
    this.fname = this.order.sticker.fname;
    this.lname = this.order.sticker.lname;
  }

  selectFlag(flag:any) {
    console.log(flag);
    this.flag = flag;
  }

  getFlagSelector() {
    if (this.flag==null) return '';
    return this.flag.selector;
  }

  getFlagName() {
    if (this.flag==null) return '';
    return this.flag.name;
  }

  next() {
    console.log(this.fname,this.lname,this.flag);


    this.order.sticker.flag = this.flag;
    this.order.sticker.fname = this.fname;
    this.order.sticker.lname = this.lname;

    this.bs.saveOrder(this.order);
    this.router.navigate(['/page2']);
  }
}
