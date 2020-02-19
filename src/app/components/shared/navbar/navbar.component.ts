import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../../../services/carrito.service';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  termino:string;

  constructor( private route:Router, private carrito:CarritoService, private auth:AuthService ) {}

  ngOnInit() {
  }

  setBusqueda( nombre:string ){

    //console.log( nombre );
    

    if( nombre == undefined ){

      alert('No se puede realizar una busqueda sin parametros');

    }else{

      this.route.navigate(['/buscar',nombre]);

    }
    

  }

  total():number{
    
    let t:number = this.carrito.data.length;
    
    return t
  }

  iniciar(){
    this.auth.login();
  }

  salir(){
    this.auth.logout();
  }

}
