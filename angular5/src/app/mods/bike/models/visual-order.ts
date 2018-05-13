import { VisualSticker } from "./visual-sticker";
import { VisualDesign } from "./visual-design";
import { VisualPackage } from "./visual-package";
import { Billing } from "./billing";
import { Order } from "./order";
import { Package } from "./package";
import { Design } from "./design";
import { Sticker } from "./sticker";

export class VisualOrder {
    billing:Billing = null;
    package:VisualPackage = null;
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
