import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from "../../../environments/environment";

const SERVER_API_URL = environment.SERVER_API_URL;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request || !request.url || (/^http/.test(request.url) && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))) {
            return next.handle(request);
        }

        const token = localStorage.getItem('Authentication') || sessionStorage.getItem('Authentication');
        if (!!token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        return next.handle(request);
    }
}