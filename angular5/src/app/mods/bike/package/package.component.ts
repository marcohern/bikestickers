import { Component, OnInit, PACKAGE_ROOT_URL } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { FlagService } from '../flag.service';
import { Package } from '../package';
import { Design } from '../design';
import { Flag } from '../flag';
import { Order } from '../order';
import { OrderBehavior } from '../order-behavior';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent extends OrderBehavior implements OnInit {

  packages:Package[] = [
    {id:1, code:"pack1", name:"x6 (4g + 2s)", price: 35000, enabled:true , selected:'btn-outline-dark' },
    {id:2, code:"pack2", name:"Paquete 2"   , price: 50000, enabled:false, selected:'btn-outline-dark' },
    {id:3, code:"pack3", name:"Paquete 3"   , price: 60000, enabled:false, selected:'btn-outline-dark' }
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

  getStatus(pack:Package) {
    var c:string[] = [];
    if (!pack.enabled) c.push('occlude');
    c.push(pack.selected);
    return c;
  }

  selectPackageOption(pack:Package) {

    this.order.package.selected = 'btn-outline-dark';
    pack.selected = 'btn-primary';

    this.order.package = pack;
    this.saveOrder();
  }

  next() {
    this.router.navigate(['/billing']);
  }

  previous() {
    this.router.navigate(['/design']);
  }

}
