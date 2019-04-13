import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Seguro } from './seguro';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8080/s4_carpooling-api/api/";
const seguro = 'seguros';
@Injectable({
  providedIn: 'root'
})
export class SeguroServiceService {

  constructor(private http: HttpClient) { }

   
  getSeguro() : Observable<Seguro[]> {
       return this.http.get<Seguro[]>(API_URL + seguro);
   }


   
   createSeguro(Seguro): Observable<Seguro> {
       return this.http.post<Seguro>(API_URL + seguro, Seguro);
   }

   
   getSeguroDetail(id): Observable<Seguro> {
       return this.http.get<Seguro>(API_URL + seguro + '/' + id);
   }


   updateSeguro(Seguro): Observable<Seguro> {
       return this.http.put<Seguro>(API_URL + seguro + '/' + Seguro.id, Seguro);
   }
   
  
   deleteSeguro(id): Observable<Seguro> {
       return this.http.delete<Seguro>(API_URL + seguro + '/' + id);
   }
}
