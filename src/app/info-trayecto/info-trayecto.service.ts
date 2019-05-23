import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InfoTrayecto} from './info-trayecto';
import { Observable } from 'rxjs';

const API_URL = "http://1e4ae67f.ngrok.io/s4_carpooling-api/api/";
const infoTrayectos = 'infoTrayecto';

@Injectable({
  providedIn: 'root'
})
export class InfoTrayectoService {

  constructor(private http: HttpClient) { }


  getInfoTrayectos() : Observable<InfoTrayecto[]> {	
        return this.http.get<InfoTrayecto[]>(API_URL + infoTrayectos);
    }

  createInfoTrayecto(info): Observable<InfoTrayecto> {
        return this.http.post<InfoTrayecto>(API_URL + infoTrayectos, info);
    }

   
    getInfoTrayecto(idDetalle): Observable<InfoTrayecto> {
        return this.http.get<InfoTrayecto>(API_URL + infoTrayectos + '/' + idDetalle);
    }

    updateInfoTrayecto(info): Observable<InfoTrayecto> {
        return this.http.put<InfoTrayecto>(API_URL + infoTrayectos + '/' + info.idDetalle, info);
    }

}
