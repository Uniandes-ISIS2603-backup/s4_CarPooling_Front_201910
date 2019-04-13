import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from './calificacion';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';


const API_URL = "http://e04f10ed.ngrok.io/s4_carpooling-api/api/";
const calificacion = 'calificaciones';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

}
