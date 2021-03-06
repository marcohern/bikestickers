import { Component, OnInit, PACKAGE_ROOT_URL } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { VisualPackage } from '../models/visual-package';
import { OrderBehavior } from '../behaviors/order-behavior';
import { packages } from '../constants/packages';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent extends OrderBehavior implements OnInit {

  packages:VisualPackage[] = [];

  constructor(
    private router:Router,
    private bs:BikeService) { 
      super(bs);
      this.packages = packages;
  }

  ngOnInit() {
    this.loadOrder();
    if (!this.checkNameAndFlagSet()) this.router.navigate(['/name-and-flag']);
    if (!this.checkDesignSet()) this.router.navigate(['/design']);
    if (this.order.package) {
      this.order.package = this.getSelectedPackage();
      this.order.package.selected = 'btn-primary';
    }
  }

  getStatus(pack:VisualPackage) {
    var c:string[] = [];
    if (!pack.enabled) c.push('occlude');
    c.push(pack.selected);
    return c;
  }

  selectPackageOption(pack:VisualPackage) {

    if (this.order.package) this.order.package.selected = 'btn-outline-dark';
    pack.selected = 'btn-primary';
    this.savePrice(pack.price, '', 0, pack.price);
    this.savePackage(pack);
  }
  getSelectedPackage() {
    for (let p of this.packages) {
      if (this.order.package.id == p.id) {
        return p;
      }
    }
    return null;
  }

  next() {
    this.router.navigate(['/billing']);
  }

  previous() {
    this.router.navigate(['/design']);
  }

}
