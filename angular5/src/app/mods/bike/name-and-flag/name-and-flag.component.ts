import { Component, OnInit, ElementRef } from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderBehavior } from '../behaviors/order-behavior';
import { BikeService } from '../bike.service';
import { Flag } from '../models/flag';
import { Sticker } from '../models/sticker';

@Component({
  selector: 'app-name-and-flag',
  templateUrl: './name-and-flag.component.html',
  styleUrls: ['./name-and-flag.component.css']
})
export class NameAndFlagComponent extends OrderBehavior implements OnInit {

  flags:Flag[] = [];
  flagx:number = 0;
  nameFlagFormGroup:FormGroup = new FormGroup({
    flag: new FormControl(),
    fname: new FormControl(),
    lname: new FormControl()
  });

  constructor(
    private router:Router,
    private bs:BikeService,
    private ms: NgbModal) { 
      super(bs);
  }

  ngOnInit() {

    this.loadOrder();
    var flagname = (this.order.sticker.flag) ? this.order.sticker.flag.name : '';
    this.nameFlagFormGroup.setValue({
      flag:flagname,
      fname:this.order.sticker.fname,
      lname:this.order.sticker.lname
    });
  }

  selectFlag(flag:any) {
    this.order.sticker.flag = flag;
    this.nameFlagFormGroup.controls['flag'].setValue(flag.name);
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
    console.log("next",this.nameFlagFormGroup);
    if (this.nameFlagFormGroup.valid) {
      this.saveFlagName(
        this.order.sticker.flag, 
        this.nameFlagFormGroup.value.fname,
        this.nameFlagFormGroup.value.lname
      );
      this.router.navigate(['/design']);
    }
  }

  modal(flagPicker) {
    this.flags = this.bs.getFlags();
    this.ms.open(flagPicker, {size:'lg', windowClass:'light-modal'}).result.then((result) => {
      console.log(`Closed with:`, result);
      this.selectFlag(result);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  filterFlags($event:any, q:string) {
    this.flags = this.bs.filterFlags(q);
  }

  getCenter(svgflag:any) {
    
  }

  onChangeName() {
    this.saveFlagName(
      this.order.sticker.flag, 
      this.nameFlagFormGroup.value.fname,
      this.nameFlagFormGroup.value.lname
    );
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
