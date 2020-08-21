
import { Image } from './Image';

export class Producto {
    id:number;
    nombre:string;
    descripcion:string;
    categoria_id:number;
    cantidad:number;
    precio_unidad:number;
    images:Image[];

}