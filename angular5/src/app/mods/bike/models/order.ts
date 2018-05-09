import { Billing } from './billing';
import { Design } from './design';
import { Package } from './package';
import { Sticker } from './sticker';

export class Order {
    billing:Billing = null;
    package:Package = null;
    design:Design = null;
    sticker:Sticker = null;

    constructor() {
        this.sticker = new Sticker();
        this.billing = new Billing();
    }
}
