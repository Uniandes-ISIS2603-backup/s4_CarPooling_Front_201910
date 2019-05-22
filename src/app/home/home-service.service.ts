import { Injectable } from '@angular/core';
import { Trayecto } from '../trayecto/trayecto';
import { HttpClient } from '@angular/common/http';
import { Ciudad } from '../ciudad/ciudad';
import { Observable } from 'rxjs';
const API_URL = "http://52a0903d.ngrok.io/s4_carpooling-api/api";
const ciudades = 'ciudades';
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

  constructor(private http: HttpClient) { }
  trayecto:Trayecto[];
    getCiudades(): Observable<Ciudad[]>
    {
      return this.http.get<Ciudad[]>(API_URL + '/' + ciudades);
    }
  updateActual(actual){ 
    this.trayecto=actual;
  }
  getActual():Trayecto[]{
    return this.trayecto;
  }
}
