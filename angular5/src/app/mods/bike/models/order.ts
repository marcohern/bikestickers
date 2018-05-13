import { Billing } from './billing';
import { VisualDesign } from './visual-design';
import { Package } from './package';
import { VisualSticker } from './visual-sticker';

export class Order {
    billing:Billing = null;
    package:Package = null;
    design:VisualDesign = null;
    sticker:VisualSticker = null;
    
    token:string = '';
    number:string = null;
    date:Date = null;

    constructor() {
        this.sticker = new VisualSticker();
        this.billing = new Billing();
    }
}
