import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public data:any [] = [];

  constructor() { }

  agregar( inf:any ){

      this.data.push( inf );
      
  }

}
