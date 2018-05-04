import { Injectable } from '@angular/core';
import { Order } from './models/order';
import { Flag } from './models/flag';
import { flags } from './constants/flags';
import { environment } from '../../../environments/environment';

var storage = window.sessionStorage;

@Injectable()
export class BikeService {

  private static storageId:string = 'com.marcohern.bikestickers.order';

  constructor() { }

  loadOrder():Order {
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
}
