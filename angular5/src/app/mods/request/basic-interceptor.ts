import { HttpInterceptor, HttpRequest, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpResponse, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';

export class BasicInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log("BasicInterceptor", req);
        return next.handle(req).do(
            res => console.log("DONE!", res), 
            err => console.error("ERR") );
    }
}
