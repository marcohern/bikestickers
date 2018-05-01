import { Component, OnInit, PACKAGE_ROOT_URL } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { Package } from '../package';
import { OrderBehavior } from '../order-behavior';
import { packages } from '../packages';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent extends OrderBehavior implements OnInit {

  packages:Package[] = [];

  constructor(
    private router:Router,
    private bs:BikeService) { 
      super(bs);
      this.packages = packages;
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
