import { Billing } from './billing';
import { Sticker } from './sticker';
import { Package } from './package';
import { Design } from './design';

export class Order {
    billing:Billing = null;
    package:Package = null;
    design:Design = null;
    sticker:Sticker = null;
    
    token:string = '';
    number:string = null;
    date:Date = null;
}
