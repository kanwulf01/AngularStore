import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map , catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable, of } from 'rxjs';
import { Producto } from '../shared/producto';
import { Carrito } from '../shared/carrrito';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  carrito:Carrito;




  constructor(private http: HttpClient,
    private processHTTPMsgService:ProcessHTTPMsgService) { }
    //Recibe como parametro un objeto de tipo Carrito
    postCarrito(carrito: Carrito): Observable<Carrito> {
      const httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      return this.http.post<Carrito>(baseURL + 'add/', carrito, httpOption)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
}
