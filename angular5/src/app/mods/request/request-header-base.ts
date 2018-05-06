import { Observable } from "rxjs/Observable";
import { RequestErrorBase } from "./request-error-base";

export class RequestHeaderBase extends RequestErrorBase {

    private getHeader() {
        return {
            "Accept": "application/json",
            "Accept-Language": "en-US"
        };
    }

    private mergeHeader(options:object = {}) {
        var header = this.getHeader();
        Object.assign(header, options);
        return header;
    }

    protected getheader<T>(url:string, q:string, options:object = {}): Observable<T> {
        return this.geterr<T>(url, q, this.mergeHeader(options) );
    }
  
    protected postheader<T>(url:string, data:object = {}, options:object = {}): Observable<T> {
        return this.posterr<T>(url, data, this.mergeHeader(options) );
    }
  
    protected putheader<T>(url:string, id:number, data:object = {}, options:object = {}): Observable<T> {
        return this.puterr<T>(url, id, data, this.mergeHeader(options));
    }
  
    protected deleteheader<T>(url:string, id:number, options:object = {}): Observable<T> {
        return this.deleteerr<T>(url, id, this.mergeHeader(options));
    }
}
