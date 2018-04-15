import { Injectable } from '@angular/core';
import { Order } from './order';

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
}
