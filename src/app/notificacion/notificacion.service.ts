import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Notificacion } from "./notificacion";
import { Observable } from "rxjs";
const API_URL = "http://52a0903d.ngrok.io/s4_carpooling-api/api";
const notificaciones = "notificaciones";

@Injectable({
  providedIn: "root"
})
export class NotificacionService {
  constructor(private http: HttpClient) {}

  createNotificacion(notificacion: Notificacion) {
    var emisor = notificacion.emisor.username;
    var receptor = notificacion.receptor.username;
    var mensaje = notificacion.mensaje;
    var trayecto = notificacion.trayecto.id;
    return this.http.post<Notificacion>(
      API_URL +
        "/" +
        notificaciones +
        "/emisor/" +
        emisor +
        "/receptor/" +
        receptor +
        "/trayecto/" +
        trayecto,
      notificacion
    );
  }
  /**
   * Returns the Observable object containing the list of notifications retrieved from the API
   * @returns The notifications
   */
  getNotifficaciones(): Observable<Notificacion[]> {
    return this.http.get<Notificacion[]>(API_URL + "/" + notificaciones);
  }

  /**
   * Updates a new user
   * @param user The updated user
   * @returns The updated user
   */
  updateNotificacion(notificacion): Observable<Notificacion> {
    return this.http.put<Notificacion>(
      API_URL + "/" + notificaciones + "/" + notificacion.id,
      notificacion
    );
  }
  /**
   * Elimina la notifiacion
   * @param notificacion
   */
  deleteNotifacion(notificacion) {
    return this.http.delete<Notificacion>(
      API_URL + "/" + notificaciones + "/" + notificacion);
  }
}
