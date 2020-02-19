import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private perfil:object = {};

  constructor( private auth:AuthService ) { }

  ngOnInit() {

    this.auth.userProfile$.subscribe( perfil => {

      this.perfil = perfil;
      
    } );
  }

}
