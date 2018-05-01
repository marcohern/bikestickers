import { Injectable } from '@angular/core';
import { Order } from './order';
import { Flag } from './flag';
import { flags } from './flags';
import { environment } from '../../../environments/environment';

var storage = window.sessionStorage;

@Injectable()
export class BikeService {

  private static storageId:string = 'com.marcohern.bikestickers.order';

  containsSticker:boolean = false;;
  containsPackage:boolean = false;
  containsBilling:boolean = false;
  order:Order = null;

  constructor() { }

  loadOrder() {
    var order = JSON.parse(storage.getItem(BikeService.storageId)) as Order;
    if (order==null) {
      return new Order();
    }
    return order;
  }

  saveOrder(order:Order) {
    storage.setItem(BikeService.storageId, JSON.stringify(order));
  }

  public getFlags() {
    return flags;
  }

  filterFlags(query:string = null) {
    var q = query.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    var flags = this.getFlags();
    if (q==null || q=='') return flags;
    var filteredFlags:Flag[] = [];
    for(let flag of flags) {
      var flagname = flag.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      if (flagname.includes(q)) {
        filteredFlags.push(flag);
      }
    }
    return filteredFlags;
  }

  flagPath(flag:Flag) {
    if (flag==null) return '';
    return environment.root + '/assets/country-flags/svg/' + flag.code.toLowerCase() + '.svg';
  }
}
