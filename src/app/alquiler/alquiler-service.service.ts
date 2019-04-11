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

 
   constructor(private http: HttpClient) { }
   busqueda:Observable<Alquiler[]>;
   alquiler:Alquiler[];
   retorno:Alquiler[];
    getalquiler() : Observable<Alquiler[]> {
         return this.http.get<Alquiler[]>(API_URL + alquiler);
     }
     getAlquilerUsuario(id) :Alquiler[] {
         this.retorno = new Array();
        this.busqueda =this.getalquiler();
        this.busqueda.subscribe(a => this.alquiler = a)
        if(this.alquiler){
            this.alquiler.forEach(element =>{
                if(element.duenio&&element.duenio.id==id){
                this.retorno.push(element);
            }
            })
        }
        
        return this.retorno;
    }
 
 
     
     createalquiler(alquiler): Observable<Alquiler> {
         return this.http.post<Alquiler>(API_URL + alquiler, alquiler);
     }
 
     
     getalquilerDetail(id): Observable<Alquiler> {
         return this.http.get<Alquiler>(API_URL + alquiler + '/' + id);
     }
 
 
     updatealquiler(alquiler): Observable<Alquiler> {
         return this.http.put<Alquiler>(API_URL + alquiler + '/' + alquiler.id, alquiler);
     }
     
    
     deletealquiler(id): Observable<Alquiler> {
         return this.http.delete<Alquiler>(API_URL + alquiler + '/' + id);
     }
}
