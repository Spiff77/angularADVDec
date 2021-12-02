import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(!request.url.includes('api.openbrewerydb.org')){
      return next.handle(request);
    }

    const lang = localStorage.getItem('lang') || 'fr'
    const newReq = request.clone({
      url: request.url + '?by_country=' + ((lang === 'fr') ? 'France' : 'England')
    })

    return next.handle(newReq);
  }
}
