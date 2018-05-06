import { HttpErrorResponse } from "@angular/common/http";
import { RequestBase } from "./request-base";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { catchError, retry } from 'rxjs/operators';

export class RequestErrorBase extends RequestBase {

    private handleError(error:HttpErrorResponse):ErrorObservable {
        console.error(error);
        throw error;
    }

    protected geterr<T>(url:string, q:string, options:object = {}): Observable<T> {
        if (q!='') url += '?' + q;
        return this.getbase<T>(url, q, options ).pipe(catchError(this.handleError));
    }
  
    protected posterr<T>(url:string, data:object = {}, options:object = {}): Observable<T> {
        return this.postbase<T>(url, data, options ).pipe(catchError(this.handleError));;
    }
  
    protected puterr<T>(url:string, id:number, data:object = {}, options:object = {}): Observable<T> {
        return this.putbase<T>(url, id, data, options).pipe(catchError(this.handleError));;
    }
  
    protected deleteerr<T>(url:string, id:number, options:object = {}): Observable<T> {
        return this.deletebase<T>(url, id, options).pipe(catchError(this.handleError));;
    }
}
