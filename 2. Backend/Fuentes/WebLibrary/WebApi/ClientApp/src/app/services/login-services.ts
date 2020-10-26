import {
  buildRoute,
  ServicesRoutes
} from './services-routes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtils } from './services-utils';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private serviceUtils: ServiceUtils,
  ) { }

  public doLogin(data: any): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.doLogin, 'post', data);
  }
}
