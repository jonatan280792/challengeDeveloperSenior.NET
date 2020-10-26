import {
  buildRoute,
  ServicesRoutes
} from '@services/services-routes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtils } from '@services/services-utils';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor(
    private serviceUtils: ServiceUtils,
  ) { }

  // CRUD Editoriales
  public getEditorials(): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.getEditorials, 'get');
  }

  public setEditorials(data): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.setEditorials, 'post', data);
  }

  public updateEditorials(data): Observable<any> {
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.updateEditorials, {
      idEditorial: data.id
    }), 'put', data);
  }

  public deleteEditorials(data): Observable<any> {
    const dataSend = {
      id: data.id
    };

    // return this.serviceUtils.buildRequest(ServicesRoutes.deletetEditorials, 'delete', dataSend);
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.deletetEditorials, {
      idEditorial: data.id
    }), 'delete');
  }

  // CRUD Libros
  public getLibrarys(): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.getLibrarys, 'get');
  }

  public setLibrarys(data): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.setLibrarys, 'post', data);
  }

  public updateLibrarys(data): Observable<any> {
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.updateLibrarys, {
      idRegister: data.id      
    }), 'put', data);
  }

  public deleteLibrarys(data): Observable<any> {
    const dataSend = {
      id: data.id
    };

    return this.serviceUtils.buildRequest(ServicesRoutes.deletetLibrarys, 'delete', dataSend);
  }
}
