import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService} from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';
import { IProducto } from '../../interfaces/producto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  private productos:object = {};

  private asyn:boolean = false;

  constructor( private productoService:ProductoService, private routes:ActivatedRoute, private carrito:CarritoService ) { }

  ngOnInit() {

    this.routes.params.subscribe( id =>{

      this.productoService.getProducto(id.id).subscribe( (data:any) =>{
            
        this.productos = data.producto[0];

      } )

    } );

  }

  agregar( items:IProducto ){

    this.asyn = true;

    setTimeout(()=>{

      this.carrito.agregar( items );

      this.asyn = false;

      alert(items.nombre + ' agregado al carrito de compras!');

    }, 3000);


  }

}
