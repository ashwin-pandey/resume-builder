import { LoaderService } from './../services/loader.service';
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(
        private _auth: AuthService,
        private _loaderService: LoaderService
    ) { }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        this._loaderService.show();
        const token = this._auth.getToken();
        console.log('in api call interceptor', token);

        if (token) {
            // token is used for user authorization
            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`),
            });
        }
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {
                    console.log('event in pipe interceptor', event);

                    if (event instanceof HttpResponse) {
                    }
                    return event;
                },
                (err: any) => {
                    return err;
                }
            ),
            finalize(() => {
                this._loaderService.hide();
                console.log('completed');
            })
        );
    }
}
