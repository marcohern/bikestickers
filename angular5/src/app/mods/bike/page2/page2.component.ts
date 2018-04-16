import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { Flag } from '../flag';
import { Order } from '../order';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  flag:Flag = null;
  fname:string = '';
  lname:string = '';
  order:Order = null;

  constructor(private router:Router, private bs:BikeService) { }

  ngOnInit() {

    this.order = this.bs.loadOrder();
    this.flag = this.order.sticker.flag;
    this.fname = this.order.sticker.fname;
    this.lname = this.order.sticker.lname;
  }

  next() {
    this.router.navigate(['/page1']);
  }

  previous() {
    this.router.navigate(['/page1']);
  }

}
