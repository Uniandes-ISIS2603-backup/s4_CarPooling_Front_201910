import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDetail } from './usuario-detail';

import { Usuario } from './usuario';

const API_URL = "http://52a0903d.ngrok.io/s4_carpooling-api/api/";
const usuarios = 'usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 

	/**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
	constructor(private http: HttpClient) { }

	/**
    * Returns the Observable object containing the list of users retrieved from the API
    * @returns The editorial
    */
 	getUsuarios() : Observable<Usuario[]> {
        return this.http.get<Usuario[]>(API_URL + usuarios);
    }


    /**
    * Creates a new user
    * @param user The new user
    * @returns The user with its new id if it was created, false if it wasn't
    */
    createUsuario(usuario): Observable<UsuarioDetail> {     
        localStorage.setItem('usuarioActual', usuario.username);
        return this.http.post<UsuarioDetail>(API_URL + usuarios, usuario);
    }
    /**
    * Login a new user
    * @param user The new user
    * @returns The user with its new id if it was created, false if it wasn't
    */
    loginUsuario(usuario: Usuario): Observable<UsuarioDetail> {
        return this.http.get<UsuarioDetail>(API_URL + usuarios + '/' + usuario.username);
    }

    /**
     * Retorna el nombre de usuaurio del usuario loggeado actualmente
     */
    darUsuarioActual(): string{
    return localStorage.getItem('usuarioActual');
    }
  

    /**
    * Returns the Observable object with the details of an user retrieved from the API
    * @returns The user details
    */
    getUsuarioDetail(username): Observable<UsuarioDetail> {
        return this.http.get<UsuarioDetail>(API_URL + usuarios + '/' + username);
    }


    /**
        * Updates a new user
        * @param user The updated user
        * @returns The updated user
        */
    updateUsuario(usuario): Observable<UsuarioDetail> {
        return this.http.put<UsuarioDetail>(API_URL + usuarios + '/' + usuario.username, usuario);
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