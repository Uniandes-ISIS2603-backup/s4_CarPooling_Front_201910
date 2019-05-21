import { Injectable } from '@angular/core';
import { Trayecto } from '../trayecto/trayecto';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
    darUsuarioActual(): string {
        throw new Error("Method not implemented.");
    }
    getUsuarioDetail(usernameActual: string) {
        throw new Error("Method not implemented.");
    }

  constructor() { }
  trayecto:Trayecto[];

  updateActual(actual){ 
    this.trayecto=actual;
  }
  getActual():Trayecto[]{
    return this.trayecto;
  }
}
