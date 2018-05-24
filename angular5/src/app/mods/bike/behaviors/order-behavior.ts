import { FlagDisplayBehavior } from './flag-display-behavior';
import { BikeService } from '../bike.service';
import { VisualOrder } from '../models/visual-order';
import { VisualFlag } from '../models/visual-flag';
import { VisualDesign } from '../models/visual-design';
import { VisualPackage } from '../models/visual-package';
import { Billing } from '../models/billing';
import { Flag } from '../models/flag';

export class OrderBehavior extends FlagDisplayBehavior {
    bss:BikeService = null;
    order:VisualOrder = null;
    stickerMode = 'simple';

    constructor(bs:BikeService) {
        super();
        this.bss = bs;
    }

    loadOrder() {
        this.order = this.bss.loadOrder();
    }

    saveOrder() {
        this.bss.saveOrder(this.order);
    }

    clearOrder() {
        this.bss.clearOrder();
        this.order = null;
    }

    checkNameAndFlagSet() {
      if (this.order.sticker.fname == '') return false;
      if (this.order.sticker.lname == '') return false;
      if (this.order.sticker.vflag == null) return false;
      return true;
    }

    checkDesignSet() {
        if (this.order.design==null) return false;
        return true;
    }

    checkPackageSet() {
        if (this.order.package==null) return false;
        return true;
    }

    saveFlagName(flag:VisualFlag, fname:string, lname:string) {
        this.order.sticker.flag = flag as Flag;
        this.order.sticker.vflag = flag;
        this.order.sticker.fname = fname;
        this.order.sticker.lname = lname;
        this.saveOrder();
    }

    saveDesign(design:VisualDesign) {
        this.order.design = design;
        this.saveOrder();
    }

    savePackage(pkg:VisualPackage) {
        this.order.package = pkg;
        this.saveOrder();
    }

    saveBilling(billing:Billing) {
        this.order.billing = billing;
        this.saveOrder();
    }

    savePrice(subtotal:number, discountCode:string, discount:number, total:number) {
        this.order.billing.subtotal = subtotal;
        this.order.billing.discountCode = discountCode;
        this.order.billing.discount = discount;
        this.order.billing.total = total;
        this.saveOrder();
    }
}
