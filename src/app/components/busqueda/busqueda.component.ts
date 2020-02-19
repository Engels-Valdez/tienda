import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { IProducto } from '../../interfaces/producto';
import { CarritoService } from '../../services/carrito.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  private productos:any [] = [];

  constructor( private _activatedRoute:ActivatedRoute, private _productoService:ProductoService, private _carrito:CarritoService ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe( (data:any) => {

      if( data.nombre == undefined){

        alert('No se puede realizar una busqueda sin parametros');

      }else{

        this._productoService.getPorProducto( data.nombre ).subscribe( (result:any) => {
          
          this.productos = result.producto;

        } )
      }

    } );
  }

  agregar( items:IProducto ){

    setTimeout( ()=>{
      
      this._carrito.agregar(items);

      alert( items.nombre + ' agregado al carrito de compras' );

    }, 1000 );


  }

}
