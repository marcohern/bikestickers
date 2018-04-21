import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { Package } from '../package';
import { Design } from '../design';
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
  design:Design = null;
  pack:Package = null;
  order:Order = null;

  packages:Package[] = [
    {id:1, code:"pack1", name:"x6 (4g + 2s)", price: 35000, enabled:true  },
    {id:2, code:"pack2", name:"Paquete 2", price: 0, enabled:false },
    {id:3, code:"pack3", name:"Paquete 3", price: 0, enabled:false }
  ];

  constructor(private router:Router, private bs:BikeService) { }

  ngOnInit() {
    this.order = this.bs.loadOrder();
    this.flag = this.order.sticker.flag;
    this.fname = this.order.sticker.fname;
    this.lname = this.order.sticker.lname;
    this.design = this.order.design;
    this.pack = this.order.package;
    if (this.pack.id == 0) this.pack = this.packages[0];
  }

  getStatus(pack:Package) {
    if (!pack.enabled) return 'occlude';
    return '';
  }

  selectPackageOption(pack:Package) {
    this.pack = pack;
    this.order.package = pack;
    this.bs.saveOrder(this.order);
    this.next();
  }

  next() {
    this.router.navigate(['/billing']);
  }

  previous() {
    this.router.navigate(['/design']);
  }

}
