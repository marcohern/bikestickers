import { RootBehavior } from './root-behavior';
import { BikeService } from './bike.service';
import { Order } from './order';


export class OrderBehavior extends RootBehavior {
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
}
