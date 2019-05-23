import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from './vehiculo';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


const API_URL = "http://1e4ae67f.ngrok.io/s4_carpooling-api/api/";
const vehiculo = 'vehiculos';
@Injectable({ 
  providedIn: 'root'
})

export class VehiculoService {
  
 /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService,
    ) { }

   /**
     * Returns the Observable object containing the list of vehicles retrieved from the API
     * @returns The vehicle
     */
    getVehiculo() : Observable<Vehiculo[]> {
         return this.http.get<Vehiculo[]>(API_URL + vehiculo);
     }
 
 
     /**
     * Creates a new vehicle
     * @param vehiculo The new vehicle
     * @returns The vehicle with its new id if it was created, false if it wasn't
     */
     createVehiculo(vehiculo): Observable<Vehiculo> {
        console.log(this.http.post<Vehiculo>(API_URL + "vehiculos", vehiculo));
        return this.http.post<Vehiculo>(API_URL + "vehiculos", vehiculo);
     }

     /**
     * Le agrega un vehiculo al usuario actualmente registrado en la página
     * @param vehiculo The new vehicle
     * @returns The vehicle with its new id if it was created, false if it wasn't
     */
    agregarVehiculoUsuario(vehiculo): Observable<Vehiculo>  {
        var usuario = this.darUsuarioActual();
        return this.http.post<Vehiculo>(API_URL + "usuarios/" + usuario + "/vehiculos/", vehiculo);
    }
    

    /**
     * Retorna el usuario que hizo loggin actualmente
     */
    darUsuarioActual(): String {
        return this.usuarioService.darUsuarioActual();
    }
 
     /**
     * Returns the Observable object with the details of an vehicle retrieved from the API
     * @returns The vehicle details
     */
     getVehiculoDetail(id): Observable<Vehiculo> {
         return this.http.get<Vehiculo>(API_URL + vehiculo + '/' + id);
     }
 
 
     /**
         * Updates a new vehicle
         * @param vehiculo The updated user
         * @returns The updated vehicle
         */
     updateVehiculo(vehiculo): Observable<Vehiculo> {
         return this.http.put<Vehiculo>(API_URL + vehiculo + '/' + vehiculo.id, vehiculo);
     }
     
     /**
     * Deletes a vehicle
     * @param id The vehicle's id
     * @returns True if the vehicle was deleted, false otherwise
     */
     deleteVehiculo(id): Observable<Vehiculo> {
         return this.http.delete<Vehiculo>(API_URL + vehiculo + '/' + id);
     }
}
