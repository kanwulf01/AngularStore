import { Component, OnInit, ViewChild, AfterViewInit, Inject  } from '@angular/core';
import { Producto } from '../shared/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrls: ['./home-p.component.scss']
})
export class HomePComponent implements OnInit {

  productos: Producto[];
  errMess:string;


  constructor(private productoService: ProductoService,
    @Inject('BaseURL') private BaseURL
    ) { 
      console.log(this.productos)
    }

  ngOnInit() {
    this.productoService.getProductos()
    .subscribe((productos)=> this.productos = productos,
    errmess => this.errMess = <any>errmess
    );
  
  }

}
