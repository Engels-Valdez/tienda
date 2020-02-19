import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url:string = 'http://localhost/Application/rest_tienda/index.php/';

  constructor( private http:HttpClient ) {}

  getProductos(){

    return this.http.get( this.url + 'producto/index' );

  }

  getProducto( id:string ){

    if( id.length < 1 ){

      return 

    }

    return this.http.get( `${this.url}producto/id/${id}` );

  }

  getPorProducto( nombre:string ){

    if( nombre == undefined ){

    return 

    }else{

      return this.http.get( `${this.url}producto/nombre/${nombre}` );
      
    }

  }
  
}
