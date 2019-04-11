import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peaje } from './peaje';
const API_URL = "http://e04f10ed.ngrok.io/s4_carpooling-api/api/";
const Peajes = 'peajes';
@Injectable({
  providedIn: 'root'
})
export class PeajeServiceService {

  
   constructor(private http: HttpClient) { }

   
    getPeaje() : Observable<Peaje[]> {
         return this.http.get<Peaje[]>(API_URL + Peajes);
     }
 
 
     
     createPeaje(Peaje): Observable<Peaje> {
         return this.http.post<Peaje>(API_URL + Peajes, Peaje);
     }
 
    
     getPeajeDetail(id): Observable<Peaje> {
         return this.http.get<Peaje>(API_URL + Peajes + '/' + id);
     }
 
 
     updatePeaje(Peaje): Observable<Peaje> {
         return this.http.put<Peaje>(API_URL + Peajes + '/' + Peaje.id, Peaje);
     }
     
    
     deletePeaje(id): Observable<Peaje> {
         return this.http.delete<Peaje>(API_URL + Peajes + '/' + id);
     }
}
