import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alquiler } from './alquiler';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import{UsuarioService} from '../usuario/usuario.service';
import { SeguroServiceService } from '../seguro/seguro-service.service';
import { AlquilerRelacion } from './alquiler-relacion';

const API_URL = "http://52a0903d.ngrok.io/s4_carpooling-api/api/";
const alquileres = 'alquileres';
@Injectable({ 
  providedIn: 'root'
})

export class AlquilerServiceService {
 
   constructor(private http: HttpClient,
   private service: UsuarioService ) { }
   busqueda:Observable<Alquiler[]>;
   alquiler:Alquiler[];
   retorno:Alquiler[];
   a:Alquiler;
   service2:SeguroServiceService = new SeguroServiceService(this.http);
   respuesta:Observable<Alquiler>;
   alquiler2=new Alquiler();
   url:string;
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
 
 
     createalquiler(alqui:AlquilerRelacion): Observable<AlquilerRelacion> {
        return this.http.post<AlquilerRelacion>(API_URL + alquileres,alqui);
        
     }
     createAlquilerRelacion(alqui:Alquiler,idAlqui):void{
        this.alquiler2.id = alqui.id;
        this.service.getUsuarioDetail(alqui.duenio).subscribe(a => {
           this.alquiler2.id = a.id;
            this.alquiler2.duenio = a.id; 
            
                this.service.getUsuarioDetail(alqui.arrendatario).subscribe(ab => {
                    this.alquiler2.arrendatario = ab.id;               
                    
                     this.service2.getSeguroDetail(alqui.seguro).subscribe(abc => {
                        this.alquiler2.seguro = abc.id;
                        this.url=API_URL + alquileres+'/'+idAlqui+'/'+this.alquiler2.duenio+'/'+this.alquiler2.arrendatario+'/'+this.alquiler2.seguro;
                        console.log("Mensaje Adentro----=-------->",this.url);
                        this.http.post(this.url,alqui);
                });
            });
            
          });
          
        
     }
     
     getalquilerDetail(id): Observable<Alquiler> {
         return this.http.get<Alquiler>(API_URL + alquileres + '/' + id);
     }
 
 
     updatealquiler(alquiler): Observable<AlquilerRelacion> {
         return this.http.put<AlquilerRelacion>(API_URL + alquileres + '/' + alquiler.id, alquiler);
     }
     
    
     deletealquiler(id): Observable<Alquiler> {
         return this.http.delete<Alquiler>(API_URL + alquileres + '/' + id);
     }
}
