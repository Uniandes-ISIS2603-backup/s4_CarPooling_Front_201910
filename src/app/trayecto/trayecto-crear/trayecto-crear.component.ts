import { Component, OnInit } from '@angular/core';
import {Trayecto} from '../trayecto';
import {TrayectoDetail} from '../trayecto-detail';

import {ToastrService} from 'ngx-toastr';
import {TrayectoService} from '../trayecto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trayecto-crear',
  templateUrl: './trayecto-crear.component.html',
  styleUrls: ['./trayecto-crear.component.css']
})
export class TrayectoCrearComponent implements OnInit {


	trayecto = new Trayecto;

  constructor(private toastrService: ToastrService,
    private trayectoService: TrayectoService,
    private router: Router) { }

  ngOnInit() {
  }

  createUsuario(){
    this.trayectoService.createTrayecto(this.trayecto)
            .subscribe(trayecto => {
                this.trayecto = trayecto;
                this.toastrService.success("El trayecto fue con éxito", "Trayecto Creado");

            });
        return this.trayecto;
  }

  darUsuarioActual(): TrayectoDetail {
    return this.trayecto;
  }
  
  get currentUser() { return JSON.stringify(this.trayecto); }

}
