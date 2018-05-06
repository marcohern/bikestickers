import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { catchError, retry } from 'rxjs/operators';

export class RequestBase {
    constructor(private http:HttpClient) {
    }

    protected getbase<T>(url:string, q:string, options:object = {}): Observable<T> {
        if (q!='') url += '?' + q;
        return this.http.get<T>(url, options );
    }
  
    protected postbase<T>(url:string, data:object = {}, options:object = {}): Observable<T> {
        return this.http.post<T>(url, data, options );
    }
  
    protected putbase<T>(url:string, id:number, data:object = {}, options:object = {}): Observable<T> {
        return this.http.put<T>(url + '/' + id, data, options);
    }
  
    protected deletebase<T>(url:string, id:number, options:object = {}): Observable<T> {
        return this.http.delete<T>(url + '/' + id, options);
    }
}
