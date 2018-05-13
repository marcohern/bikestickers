import { Billing } from './billing';
import { VisualDesign } from './visual-design';
import { Package } from './package';
import { Sticker } from './sticker';

export class Order {
    billing:Billing = null;
    package:Package = null;
    design:VisualDesign = null;
    sticker:Sticker = null;
    
    token:string = '';
    number:string = null;
    date:Date = null;

    constructor() {
        this.sticker = new Sticker();
        this.billing = new Billing();
    }
}
