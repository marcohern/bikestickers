import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderBehavior } from '../order-behavior';
import { BikeService } from '../bike.service';
import { FlagService } from '../flag.service';
import { Flag } from '../flag';

@Component({
  selector: 'app-name-and-flag',
  templateUrl: './name-and-flag.component.html',
  styleUrls: ['./name-and-flag.component.css']
})
export class NameAndFlagComponent extends OrderBehavior implements OnInit {

  flags:Flag[] = [];

  constructor(
    private router:Router,
    private bs:BikeService,
    private fs:FlagService,
    private ms: NgbModal) { 
      super(bs);
  }

  ngOnInit() {
    this.loadOrder();
  }

  selectFlag(flag:any) {
    console.log(flag);
    this.order.sticker.flag = flag;
  }

  getFlagSelector() {
    if (this.order.sticker.flag==null) return '';
    return this.order.sticker.flag.code;
  }

  getFlagName() {
    if (this.order.sticker.flag==null || this.order.sticker.flag.name == '') return '- Bandera -';
    return this.order.sticker.flag.name;
  }

  next() {
    this.saveOrder();
    this.router.navigate(['/design']);
  }

  modal(flagPicker) {
    this.flags = this.fs.getFlags();
    this.ms.open(flagPicker, {size:'lg', windowClass:'light-modal'}).result.then((result) => {
      console.log(`Closed with:`, result);
      this.selectFlag(result);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  filterFlags($event:any, q:string) {
    this.flags = this.fs.filterFlags(q);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
