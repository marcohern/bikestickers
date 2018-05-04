import { FlagDisplayBehavior } from './flag-display-behavior';
import { BikeService } from '../bike.service';
import { Order } from '../models/order';
import { Flag } from '../models/flag';
import { Design } from '../models/design';


export class OrderBehavior extends FlagDisplayBehavior {
    bss:BikeService = null;
    order:Order = null;

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

    saveFlagName(flag:Flag, fname:string, lname:string) {
        this.order.sticker.flag = flag;
        this.order.sticker.fname = fname;
        this.order.sticker.lname = lname;
        this.saveOrder();
    }

    saveDesign(design:Design) {
        this.order.design = design;
        this.saveOrder();
    }
}
