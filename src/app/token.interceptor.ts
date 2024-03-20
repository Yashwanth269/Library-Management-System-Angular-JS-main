import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('usertoken');
    
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(token)}`
        }
      });
    }
    return next.handle(request);
  }
}
