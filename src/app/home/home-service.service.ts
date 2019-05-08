import { Injectable } from '@angular/core';
import { Trayecto } from '../trayecto/trayecto';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor() { }
  trayecto:Trayecto[];

  updateActual(actual){ 
    this.trayecto=actual;
  }
  getActual():Trayecto[]{
    return this.trayecto;
  }
}
