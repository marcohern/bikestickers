import { Billing } from './billing';
import { Package } from './package';
import { Sticker } from './sticker';

export class Order {
    billing:Billing = null;
    package:Package = null;
    sticker:Sticker = null;

    constructor() {
        this.billing = new Billing();
        this.package = new Package();
        this.sticker = new Sticker();
    }
}
