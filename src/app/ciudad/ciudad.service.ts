import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ciudad } from "./ciudad";

const API_URL = "http://1e4ae67f.ngrok.io/s4_carpooling-api/api/";
const ciudades = "ciudades";

@Injectable({
  providedIn: "root"
})
export class CiudadService {
  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) {}

  /**
   * Returns the Observable object containing the list of users retrieved from the API
   * @returns The editorial
   */
  getCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(API_URL + ciudades);
  }

  /**
   * Creates a new city
   * @param user The new city
   * @returns The city with its new id if it was created, false if it wasn't
   */
  createCiudad(ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(API_URL + ciudades, ciudad);
  }

  /**
   * Updates a new city
   * @param user The updated city
   * @returns The updated city
   */
  updateCity(ciudad): Observable<Ciudad> {
    return this.http.put<Ciudad>(API_URL + ciudades + "/" + ciudad.id, ciudad);
  }
}
