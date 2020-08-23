import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map , catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable, of } from 'rxjs';
import { Producto } from '../shared/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient,
    private processHTTPMsgService:ProcessHTTPMsgService
    ) { }


    getProductos(): Observable<Producto[]> {
      return this.http.get<Producto[]>(baseURL + 'products/listaProductos/')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
    getProducto(id: number): Observable<Producto> {
      return this.http.get<Producto>(baseURL + 'products/getProducto/'+ id + '/')
    }

}
