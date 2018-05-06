import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { RequestGetBase } from './request-get-base';

@Injectable()
export class RequestService extends RequestGetBase {

  constructor(injector:Injector) { 
	  super(injector.get(HttpClient));
  }

  public query<T>(url:string, query:object = {}):Observable<T> {
	  return this.getquery(url, query);
  }

  public view<T>(url:string, id:number, query:object = {}, options:object = {}):Observable<T> {
	return this.viewquery(url, id, query, options);
  }

  public create<T>(url:string, entity:object, options:object = {}):Observable<T> {
	return this.postheader(url, entity, options);
  }

  public update<T>(url:string, id:number, entity:object, options:object = {}):Observable<T> {
	return this.putheader(url, id, entity, options);
  }

  public delete<T>(url:string, id:number, options:object = {}):Observable<T> {
	return this.deleteheader(url, id, options);
  }
}
