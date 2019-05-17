import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificacion } from './notificacion';
const API_URL = "http://52a0903d.ngrok.io/s4_carpooling-api/api";
const notificaciones = 'notificaciones';

@Injectable({
  providedIn: 'root'
})

export class NotificacionService {

  constructor(private http: HttpClient) { }

  createNotificacion(notificacion)
  {
    return this.http.post<Notificacion>(API_URL + '/' + notificaciones, notificacion);
  }
}
