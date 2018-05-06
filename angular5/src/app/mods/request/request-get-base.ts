import { RequestBase } from "./request-base";
import { Observable } from "rxjs/Rx";
import { RequestHeaderBase } from "./request-header-base";

export class RequestGetBase extends RequestHeaderBase {
    private getQueryString(query:object):string {
        let str = '';
        let i = 0;
        Object.keys(query).forEach(key => {
            str += (i>0) ? '&' : '';
            str += key + '=' + encodeURI(query[key]);
            i++;
        });
        return str;
    }

    protected getquery<T>(url:string, query:object = {}, options:object = {}): Observable<T> {
        var q = this.getQueryString(query);
        return super.getheader<T>(url, q, options );
    }

    protected viewquery<T>(url:string, id:number, query:object={}, options:object = {}): Observable<T> {
        url = url + '/' + id;
        return this.getquery<T>(url, query, options );
    }
}
