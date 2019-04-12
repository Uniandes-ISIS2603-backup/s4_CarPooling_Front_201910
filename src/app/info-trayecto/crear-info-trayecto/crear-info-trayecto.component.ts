import { Component, OnInit } from '@angular/core';
import { InfoTrayecto} from '../info-trayecto';

import {ToastrService} from 'ngx-toastr';
import {InfoTrayectoService} from '../info-trayecto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-info-trayecto',
  templateUrl: './crear-info-trayecto.component.html',
  styleUrls: ['./crear-info-trayecto.component.css']
})
export class CrearInfoTrayectoComponent implements OnInit {


	info = new InfoTrayecto();

  constructor(
  	    private toastrService: ToastrService,
    private infoTrayectoService: InfoTrayectoService,
    private router: Router) { }

  /**
   * Cancels the creation of the new trayecto
  * Redirects to the user' list page  
  */
  cancelCreation(): void {
      this.toastrService.warning('El Trayecto no fue creado', 'Registro Trayecto'); 
      this.router.navigate(['home']);

  }
//cambio
  createInfoTrayecto(){
    this.infoTrayectoService.createInfoTrayecto(this.info)
            .subscribe(info => {
                this.info = info;
                this.toastrService.success("El Info Trayecto fue creado con éxito", "Info Trayecto Creado");
                this.router.navigate(['home']);
            });
        return this.info;
  }

  get currentUser() { return JSON.stringify(this.info); }

  ngOnInit() {
  }

}
