import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Producto } from '../shared/producto';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  //Ver detalle de Producto
  //A parte de ver el detalle debo poder poner la cantidad que deasea comprar

  producto: Producto;
  cantidad: number;
  idProducto:number;
  errMess:string;
  p:any;


  constructor(private productoService: ProductoService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL,
    ) {
      
  }

  ngOnInit() {

    this.route.params.pipe(switchMap((params:Params)=> this.productoService.getProducto(params['id'])))
    //this.dishService.getDish(id)
    .subscribe((producto) =>{this.producto = producto, console.log(this.producto),
      errmess => this.errMess = <any>errmess} 
    );
  }

}
