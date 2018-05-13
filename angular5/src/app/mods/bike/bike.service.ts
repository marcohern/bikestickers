import { Injectable } from '@angular/core';
import { flags } from './constants/flags';
import { environment } from '../../../environments/environment';
import { VisualFlag } from './models/visual-flag';
import { VisualOrder } from './models/visual-order';
import { Order } from './models/order';
import { Package } from './models/package';
import { Design } from './models/design';
import { Sticker } from './models/sticker';
import { Flag } from './models/flag';
import { VisualSticker } from './models/visual-sticker';
import { VisualDesign } from './models/visual-design';
import { VisualPackage } from './models/visual-package';
import { designs } from './constants/designs';
import { packages } from './constants/packages';

var storage = window.sessionStorage;

@Injectable()
export class BikeService {

  private static storageId:string = 'com.marcohern.bikestickers.order';

  constructor() { }

  loadOrder():VisualOrder {
    var order = JSON.parse(storage.getItem(BikeService.storageId)) as VisualOrder;
    if (order==null) {
      return new VisualOrder();
    }
    return order;
  }

  saveOrder(order:VisualOrder) {
    storage.setItem(BikeService.storageId, JSON.stringify(order));
  }

  clearOrder() {
    storage.removeItem(BikeService.storageId);
  }

  public getFlags():VisualFlag[] {
    return flags;
  }

  filterFlags(query:string = null) : VisualFlag[] {
    var q = query.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    var flags = this.getFlags();
    if (q==null || q=='') return flags;
    var filteredFlags:VisualFlag[] = [];
    for(let flag of flags) {
      var flagname = flag.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      if (flagname.includes(q)) {
        filteredFlags.push(flag);
      }
    }
    return filteredFlags;
  }

  findFlag(code:string) : VisualFlag {
    if (code=='') return null;
    for (let flag of flags) {
      if (flag.code == code) {
        return flag;
      }
    }
    return null;
  }

  findDesign(code:string):VisualDesign {
    if (code=='') return null;
    for (let design of designs) {
      if (design.code == code) {
        return design;
      }
    }
    return null;
  }

  findPackage(code:string):VisualPackage {
    if (code=='') return null;
    for (let pack of packages) {
      if (pack.code == code) {
        return pack;
      }
    }
    return null;
  }

  toOrder(order:VisualOrder) : Order {
    return {
        billing: order.billing,
        package: this.toPackage(order.package),
        design: this.toDesign(order.design),
        sticker: this.toSticker(order.sticker),

        token: order.token,
        number: order.number,
        date: order.date
    } as Order;
  }

  toFlag(flag:VisualFlag) : Flag {
    return {
      id: flag.id,
      code: flag.code,
      name: flag.name
    } as Flag;
  }

  toSticker(sticker: VisualSticker) : Sticker {
    return {
      flag: this.toFlag(sticker.vflag),
      fname: sticker.fname,
      lname: sticker.lname
    } as Sticker;
  }

  toDesign(design: VisualDesign) : Design {
    return {
      id: design.id,
      code: design.code,
      name: design.name,
      price: design.price
    } as Design;
  }

  toPackage(pack: VisualPackage) : Package {
    return {
      id: pack.id,
      code: pack.code,
      name: pack.name,
      detail: pack.detail,
      price: pack.price
    } as Package;
  }
}
