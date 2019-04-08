import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alquiler } from './alquiler';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';

const API_URL = "../../assets/";
const clientes = 'data.json';
@Injectable({
  providedIn: 'root'
})

export class AlquilerServiceService {

  constructor(private http: HttpClient) { }
  getAlquiler() : Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(API_URL + clientes);
}
}
