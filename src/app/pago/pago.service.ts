import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from './info';

import { Pago } from './pago';

const API_URL = "http://e04f10ed.ngrok.io/s4_carpooling-api/api/";
const pagos = 'pagos';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

	/**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
	constructor(private http: HttpClient) { }

	/**
    * Returns the Observable object containing the list of payments retrieved from the API
    * @returns The payments
    */
 	getPagos() : Observable<Pago[]> {
        return this.http.get<Pago[]>(API_URL + pagos);
    }


    /**
    * Creates a new payment
    * @param payment The new payment
    * @returns The payment with its new id if it was created, false if it wasn't
    */
    createPago(pago): Observable<Info> {
        return this.http.post<Info>(API_URL + pagos, pago);
    }

    /**
    * Returns the Observable object with the details of a payment retrieved from the API
    * @returns The payment details
    */
    getPagoInfo(id): Observable<Info> {
        return this.http.get<Info>(API_URL + pagos + '/' + id);
    }


    /**
        * Updates a new payment
        * @param pago The updated payment
        * @returns The updated payment
        */
    updatePago(pago): Observable<Info> {
        return this.http.put<Info>(API_URL + pagos + '/' + usuario.id, pago);
    }
    
    /**
    * Deletes a payment
    * @param username The payment's id
    * @returns True if the payment was deleted, false otherwise
    */
    deletePago(id): Observable<Info> {
        return this.http.delete<Info>(API_URL + pagos + '/' + id);
    }

}