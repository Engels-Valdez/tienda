import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';
import { IProducto } from '../../interfaces/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private productos:any [] = [];

  private async:boolean = false;

  constructor( private _productoService:ProductoService, private carrito:CarritoService ) { }

  ngOnInit() {

      this._productoService.getProductos().subscribe( (data:any) =>{

        this.productos = data.productos;
        
      } )

  }

  agregarAlCarrito( producto:IProducto ){

    setTimeout( ()=>{

      this.carrito.agregar( producto );

      alert( producto.nombre + ' agregado al carrtio de compras!' );

    }, 1000 );

  }

}
