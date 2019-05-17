import { Component, OnInit } from '@angular/core';
import {Trayecto} from '../trayecto';
import {TrayectoDetail} from '../trayecto-detail';

import {ToastrService} from 'ngx-toastr';
import {TrayectoService} from '../trayecto.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trayecto-crear',
  templateUrl: './trayecto-crear.component.html',
  styleUrls: ['./trayecto-crear.component.css'],
  providers: [DatePipe]
})
export class TrayectoCrearComponent implements OnInit {


	trayecto = new Trayecto;

  constructor(private dp: DatePipe,
    private toastrService: ToastrService,
    private trayectoService: TrayectoService,
    private router: Router) { }

  ngOnInit() {
    this.trayecto = new Trayecto();
  }

  cancelCreation(): void {
      this.toastrService.warning('El Trayecto no fue creado', 'Registro Trayecto'); 
      this.router.navigate(['home']);

  }

  createTrayecto(){
    

let dateB1: Date = new Date(this.trayecto.fechaInicial.year, this.trayecto.fechaInicial.month - 1, this.trayecto.fechaInicial.day);
this.trayecto.fechaInicial = this.dp.transform(dateB1, 'yyyy-MM-dd');
console.log(this.trayecto.fechaInicial);
    this.trayectoService.createTrayecto(this.trayecto)
            .subscribe(trayecto => {
                this.trayecto = trayecto;
                this.toastrService.success("El trayecto fue con éxito", "Trayecto Creado");

            });
        return this.trayecto;
  }

  darTrayectoActual(): TrayectoDetail {
    return this.trayecto;
  }
  
  get currentUser() { return JSON.stringify(this.trayecto); }

}
