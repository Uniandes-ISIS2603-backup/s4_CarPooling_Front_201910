import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alquiler } from './alquiler';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import{UsuarioService} from '../usuario/usuario.service';
import { SeguroServiceService } from '../seguro/seguro-service.service';

const API_URL = "http://e04f10ed.ngrok.io/s4_carpooling-api/api/";
const alquileres = 'alquileres';
@Injectable({ 
  providedIn: 'root'
})

export class AlquilerServiceService {

 
   constructor(private http: HttpClient) { }
   busqueda:Observable<Alquiler[]>;
   alquiler:Alquiler[];
   retorno:Alquiler[];
   a:Alquiler;
   service:UsuarioService = new UsuarioService(this.http);
   service2:SeguroServiceService = new SeguroServiceService(this.http);
   respuesta:Observable<Alquiler>;
   alquiler2:Alquiler;
    getalquiler() : Observable<Alquiler[]> {
         return this.http.get<Alquiler[]>(API_URL + alquileres);
     }
     getAlquilerUsuario(id) :Alquiler[] {
         this.retorno = new Array();
         this.alquiler = new Array();
        this.busqueda =this.getalquiler();
        this.busqueda.subscribe(a => this.alquiler = a)
        if(this.alquiler){
            this.alquiler.forEach(element =>{
                if(element.duenio&&element.duenio==id){
                this.retorno.push(element);
            }
            })
        }
        
        return this.retorno;
    }
 
 
     createalquiler(alqui): Observable<Alquiler> {
        console.log("alquiler---->", alqui);
        alqui.duenio=null;
        alqui.arrendatario=null;
        alqui.seguro=null;
        return this.http.post<Alquiler>(API_URL + alquileres,alqui);
        
     }
     createAlquilerRelacion(alqui):Observable<Alquiler>{
        this.service.getUsuarioDetail(alqui.duenio).subscribe(a => {
           
            this.alquiler2.duenio = a; 
            console.log("alquiler---->", a);
                this.service.getUsuarioDetail(alqui.arrendatario).subscribe(ab => {
                    this.alquiler2.arrendatario = ab;
                
                console.log("alquiler---->",ab);
                    alqui.seguro = this.service2.getSeguroDetail(alqui.seguro).subscribe(abc => {
                        this.alquiler2.seguro = abc;
                        console.log("alquiler---->", abc);
                        
                });
            });
            
            return this.http.post<Alquiler>(API_URL + alquileres+'/'+this.alquiler2.id+'/'+this.alquiler2.duenio+'/'+this.alquiler2.arrendatario+'/'+this.alquiler2.seguro+'/',alqui);});
        return null;
     }
     
     getalquilerDetail(id): Observable<Alquiler> {
         return this.http.get<Alquiler>(API_URL + alquileres + '/' + id);
     }
 
 
     updatealquiler(alquiler): Observable<Alquiler> {
         return this.http.put<Alquiler>(API_URL + alquileres + '/' + alquiler.id, alquiler);
     }
     
    
     deletealquiler(id): Observable<Alquiler> {
         return this.http.delete<Alquiler>(API_URL + alquileres + '/' + id);
     }
}
