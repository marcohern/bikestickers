import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class RequestService {

  constructor(private http:HttpClient) { }

  private getHeader() {
  	return {
  		"Accept": "application/json",
  		"Accept-Language": "en-US"
  	};
  }

  private getOptions() {
  	return {
  		headers: this.getHeader()
  	}
  }

  public getQueryString(query:object):string {
  	let str = '';
  	let i = 0;
  	Object.keys(query).forEach(key => {
  		str += (i>0) ? '&' : '';
  		str += key + '=' + encodeURI(query[key]);
  		i++;
  	});
  	return str;
  }

  public get<T>(url:string, query:object = {}): Observable<T> {
  	let q = this.getQueryString(query);
  	if (q!='') url += '?' + q;
  	return this.http.get<T>(url, this.getOptions() );
  }

  public post<T>(url:string, data:object = {}): Observable<T> {
  	return this.http.post<T>(url, data, this.getOptions() );
  }

  public put<T>(url:string, id:number, data:object = {}): Observable<T> {
  	return this.http.put<T>(url + '/' + id, data, this.getOptions());
  }

  public delete<T>(url:string, id:number): Observable<T> {
  	return this.http.delete<T>(url + '/' + id, this.getOptions());
  }
}
