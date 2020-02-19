import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  private data:any [] = [];

  private ver :boolean= false;

  constructor( private carrito:CarritoService, private auth:AuthService ) { }

  ngOnInit() {
    
    this.data.push( this.carrito.data );    
    
  } 

  total():number{

    let x:number = 0;

    this.data.map( ( total:any )=>{
      
      for( let i=0; i < total.length; i++ ){

        x += parseInt( total[i].precio );

      }
      
    } );

    return x;

  }

  eliminarItems( id:any ):void{

   this.data.map( (items:any)=>{

    for( let i=0; i<items.length; i ++){

          if( items[i].id === id ){
      
              items.splice( i, 1 );
            
          }

    }

   } );

  }

  pagar(){

    if( !this.auth.loggedIn ){
      this.auth.login();
    }else{
      alert('Pago realizado!');
    }

  }

}
