import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor( private auth:AuthService, private router:Router ) { }

  canActivate():boolean{

    if( !this.auth.loggedIn ){

        alert('Debes iniciar seccion para poder acceder a esta pagina!');
        this.router.navigate(['/home']);
        return false 

    }else{

      return true

    }

  }
}
