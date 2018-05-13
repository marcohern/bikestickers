import { Component, OnInit } from '@angular/core';
import { OrderBehavior } from '../behaviors/order-behavior';
import { Router, ActivatedRoute } from '@angular/router';
import { BikeService } from '../bike.service';
import { RemoteOrder } from '../models/remote-order';
import { HttpClient } from '@angular/common/http';
import { VisualFlag } from '../models/visual-flag';
import { VisualDesign } from '../models/visual-design';
import { VisualPackage } from '../models/visual-package';
import { Billing } from '../models/billing';
import { VisualSticker } from '../models/visual-sticker';
import { Flag } from '../models/flag';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  sticker:VisualSticker = null;
  design:VisualDesign = null;
  pack:VisualPackage = null;
  billing:Billing = null;
  reference:string = '';

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private bs:BikeService,
    private http:HttpClient) { 
      
    }

  ngOnInit() {
    //this.loadOrder();
    var reference = this.route.snapshot.params['id'];
    this.http.get<RemoteOrder>('/api/order/'+reference).subscribe((order:RemoteOrder) => {
      this.reference = order.reference;

      var flag = this.bs.findFlag(order.sticker_flag);
      this.design = this.bs.findDesign(order.design_code);
      this.pack = this.bs.findPackage(order.package_code);
      this.sticker = <VisualSticker>{
        vflag: flag,
        flag: flag as Flag,
        fname: order.sticker_fname,
        lname: order.sticker_lname
      };
      this.billing = <Billing>{

      };
      
    }, (error) => {
      console.error(error);
    });
  }

  adjustOrder() {
    this.router.navigate(['/name-and-flag']);
  }

}
