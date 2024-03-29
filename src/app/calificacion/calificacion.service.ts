import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from './calificacion';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';


const API_URL = "http://1e4ae67f.ngrok.io/s4_carpooling-api/api/";
const calificaciones = 'calificaciones';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
	constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of users retrieved from the API
    * @returns The editorial
    */
 	getCalificaciones() : Observable<Calificacion[]> {
    return this.http.get<Calificacion[]>(API_URL + calificaciones);
  }

  createCalificacion(calificacion: Calificacion) {
    var calificado = calificacion.calificado.username;
    var calificador = calificacion.calificador.username;
    var trayecto = calificacion.trayecto.id;
    return this.http.post<Calificacion>(
      API_URL +
        "/" +
        calificaciones +
        "/calificado/" +
        calificado +
        "/calificador/" +
        calificador +
        "/trayecto/" +
        trayecto,
        calificacion
    );
  }



}
