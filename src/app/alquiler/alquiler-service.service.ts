import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alquiler } from './alquiler';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';


const API_URL = "http://e04f10ed.ngrok.io/s4_carpooling-api/api/";
const alquiler = 'alquileres';
@Injectable({ 
  providedIn: 'root'
})

export class AlquilerServiceService {

 /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }

   /**
     * Returns the Observable object containing the list of users retrieved from the API
     * @returns The editorial
     */
    getalquiler() : Observable<Alquiler[]> {
         return this.http.get<Alquiler[]>(API_URL + alquiler);
     }
 
 
     /**
     * Creates a new user
     * @param user The new user
     * @returns The user with its new id if it was created, false if it wasn't
     */
     createalquiler(alquiler): Observable<Alquiler> {
         return this.http.post<Alquiler>(API_URL + alquiler, alquiler);
     }
 
     /**
     * Returns the Observable object with the details of an user retrieved from the API
     * @returns The user details
     */
     getalquilerDetail(id): Observable<Alquiler> {
         return this.http.get<Alquiler>(API_URL + alquiler + '/' + id);
     }
 
 
     /**
         * Updates a new user
         * @param user The updated user
         * @returns The updated user
         */
     updatealquiler(alquiler): Observable<Alquiler> {
         return this.http.put<Alquiler>(API_URL + alquiler + '/' + alquiler.username, alquiler);
     }
     
     /**
     * Deletes a user
     * @param username The users's username
     * @returns True if the user was deleted, false otherwise
     */
     deletealquiler(username): Observable<Alquiler> {
         return this.http.delete<Alquiler>(API_URL + alquiler + '/' + username);
     }
}
