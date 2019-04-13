import { Component, OnInit } from '@angular/core';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';

@Component({
  selector: 'app-listar-calificacion',
  templateUrl: './listar-calificacion.component.html',
  styleUrls: ['./listar-calificacion.component.css']
})
export class ListarCalificacionComponent implements OnInit {
  
  calificacion: Calificacion[];

  constructor(private service: CalificacionService) { }
  
  getCaificaciones():void{
    this.service.getCalificaciones().subscribe
    (a => this.calificacion = a);

  }


  ngOnInit() {
    this.getCaificaciones();
  }

}
