import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsuarioDetail } from "./usuario-detail";

import { Usuario } from "./usuario";
import { TrayectoDetail } from "../trayecto/trayecto-detail";
import { TrayectoService } from "../trayecto/trayecto.service";

const API_URL = "http://1e4ae67f.ngrok.io/s4_carpooling-api/api/";
const usuarios = "usuarios";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
 
  /**
   * Variable para almacenar los usuarios encontrados segun la busqueda del usuario
   */
  usuariosBuscados: Usuario[];

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient,
    private trayectoService: TrayectoService ) {}

  /**
   * Returns the Observable object containing the list of users retrieved from the API
   * @returns The editorial
   */
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_URL + usuarios);
  }

  /**
   * Creates a new user
   * @param user The new user
   * @returns The user with its new id if it was created, false if it wasn't
   */
  createUsuario(usuario): Observable<UsuarioDetail> {
    localStorage.setItem("usuarioActual", usuario.username);
    return this.http.post<UsuarioDetail>(API_URL + usuarios, usuario);
  }

  /**
   * Logout
   */
  logOut() {
    localStorage.setItem("usuarioActual", "vacio");
  }
  /**
   * Login a new user
   * @param user The new user
   * @returns The user with its new id if it was created, false if it wasn't
   */
  loginUsuario(usuario: Usuario): Observable<UsuarioDetail> {
    return this.http.get<UsuarioDetail>(
      API_URL + usuarios + "/" + usuario.username
    );
  }

  /**
   * Retorna el nombre de usuaurio del usuario loggeado actualmente
   */
  darUsuarioActual(): string {
    return localStorage.getItem("usuarioActual");
  }

  /**
   * Returns the Observable object with the details of an user retrieved from the API
   * @returns The user details
   */
  getUsuarioDetail(username): Observable<UsuarioDetail> {
    return this.http.get<UsuarioDetail>(API_URL + usuarios + "/" + username);
  }

  /**
   * Updates a new user
   * @param user The updated user
   * @returns The updated user
   */
  updateUsuario(usuario): Observable<UsuarioDetail> {
    return this.http.put<UsuarioDetail>(
      API_URL + usuarios + "/" + usuario.username,
      usuario
    );
  }

  updateUsuariosBuscados(actual) {
    this.usuariosBuscados = actual; 
  }

  getUsuariosBuscados(): Usuario[] {
    return this.usuariosBuscados;
  }

  trayectoMostrar: number;

  mostrarTrayecto(trayecto) {
    this.trayectoMostrar = trayecto; 
  }

  getTrayectoMostrar(): number {
    return this.trayectoMostrar;
  }

  usernameMostrar: string;

  mostrarUsuario(usuario: string) {
    this.usernameMostrar = usuario;
  }

  getUsuarioMostrar(): string {
    return this.usernameMostrar;
  }


  /**
   * Agregar un pasajer a un trayecto específico con el usuario pasado por parametro
   */
  addPasajero(pasajero: string, idtrayecto:number): Observable<TrayectoDetail> {
    return this.http.put<TrayectoDetail>(API_URL + usuarios + "/" + pasajero + "/trayectosPasajero/" + idtrayecto, null);
  }

  /**
    * Deletes a user
    * @param username The users's username
    * @returns True if the user was deleted, false otherwise
    *
    deleteUsuario(username): Observable<UsuarioDetail> {
        return this.http.delete<UsuarioDetail>(API_URL + usuarios + '/' + username);
    }*/
}
