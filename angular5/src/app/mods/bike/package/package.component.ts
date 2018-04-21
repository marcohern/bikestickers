import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { Flag } from '../flag';
import { Order } from '../order';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
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
    this.router.navigate(['/billing']);
  }

  previous() {
    this.router.navigate(['/design']);
  }

}
