import { Component, OnInit } from '@angular/core';
import { TrayectoService } from '../trayecto.service';
import { Router } from '@angular/router';
import {Trayecto} from '../trayecto';
import { HomeServiceService } from '../../home/home-service.service';

@Component({
  selector: 'app-listar-trayecto',
  templateUrl: './listar-trayecto.component.html',
  styleUrls: ['./listar-trayecto.component.css']
})
export class ListarTrayectoComponent implements OnInit {

  constructor(private trayectoService: TrayectoService, private router: Router, private home:HomeServiceService) { }

  trayectos: Trayecto[];


  getTrayectos(): void {
        this.trayectoService.getTrayectos().subscribe(trayectos => this.trayectos = trayectos);
    }



  ngOnInit() {
    //this.getTrayectos();
    this.trayectos=this.home.getActual();
  }

}
