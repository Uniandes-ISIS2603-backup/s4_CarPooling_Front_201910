import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrayectoDetailComponent } from './trayecto-detail/trayecto-detail.component';
import { TrayectoDetail} from './trayecto-detail';
import { Trayecto } from './trayecto';

const API_URL = "http://52a0903d.ngrok.io/s4_carpooling-api/api/";
const trayectos = 'trayectos';

@Injectable({
  providedIn: 'root'
})
export class TrayectoService {

	/**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
	constructor(private http: HttpClient) { }

	/**
    * Returns the Observable object containing the list of users retrieved from the API
    * @returns The editorial
    */
 	getTrayectos() : Observable<Trayecto[]> {
        return this.http.get<Trayecto[]>(API_URL + '/' + trayectos);
    }


    /**
    * Creates a new user
    * @param user The new user
    * @returns The user with its new id if it was created, false if it wasn't
    */
    createTrayecto(trayecto): Observable<Trayecto> {
        return this.http.post<TrayectoDetail>(API_URL + trayectos, trayecto);
    }

    /**
    * Returns the Observable object with the details of an user retrieved from the API
    * @returns The user details
    */
    getTrayectoDetail(id): Observable<TrayectoDetail> {
        return this.http.get<TrayectoDetail>(API_URL + trayectos + '/' + id);
    }


    /**
        * Updates a new user
        * @param user The updated user
        * @returns The updated user
        */
    updateTrayecto(trayecto): Observable<TrayectoDetail> {
        return this.http.put<TrayectoDetail>(API_URL + trayectos + '/' + trayecto.idTrayectos, trayecto);
    }
    
    /**
    * Deletes a user
    * @param username The users's username
    * @returns True if the user was deleted, false otherwise
    */
    deleteTrayecto(idTrayecto): Observable<TrayectoDetail> {
        return this.http.delete<TrayectoDetail>(API_URL + trayectos + '/' + idTrayecto);
    }

}