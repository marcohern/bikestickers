import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { FlagService } from '../flag.service';
import { Flag } from '../flag';
import { Order } from '../order';

@Component({
  selector: 'app-name-and-flag',
  templateUrl: './name-and-flag.component.html',
  styleUrls: ['./name-and-flag.component.css']
})
export class NameAndFlagComponent implements OnInit {

  flags:Flag[] = [];

  flag:Flag = null;
  fname:string = '';
  lname:string = '';
  order:Order = null;
  root:string = '';

  constructor(
    private router:Router,
    private bs:BikeService,
    private fs:FlagService,
    private ms: NgbModal) { }

  ngOnInit() {
    this.order = this.bs.loadOrder();
    this.flag  = this.order.sticker.flag;
    this.fname = this.order.sticker.fname;
    this.lname = this.order.sticker.lname;
    this.root = '';//environment.root;
  }

  selectFlag(flag:any) {
    console.log(flag);
    this.flag = flag;
  }

  getFlagSelector() {
    if (this.flag==null) return '';
    return this.flag.code;
  }

  getFlagName() {
    if (this.flag==null || this.flag.name == '') return '- Bandera -';
    return this.flag.name;
  }

  next() {
    console.log(this.fname,this.lname,this.flag);


    this.order.sticker.flag = this.flag;
    this.order.sticker.fname = this.fname;
    this.order.sticker.lname = this.lname;

    this.bs.saveOrder(this.order);
    this.router.navigate(['/design']);
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

  modal(flagPicker) {
    this.flags = this.fs.getFlags();
    this.ms.open(flagPicker, {size:'lg', windowClass:'light-modal'}).result.then((result) => {
      console.log(`Closed with:`, result);
      this.selectFlag(result);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }
}
