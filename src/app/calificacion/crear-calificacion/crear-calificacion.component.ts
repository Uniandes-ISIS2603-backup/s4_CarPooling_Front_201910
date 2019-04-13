import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../calificacion';

import {Router} from '@angular/router';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-crear-calificacion',
  templateUrl: './crear-calificacion.component.html',
  styleUrls: ['./crear-calificacion.component.css']
})
export class CrearCalificacionComponent implements OnInit {

  	/**
  * Base user for the creation of new users
  */
  calificacion = new Calificacion();


	/**
    * Constructor for the component
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
  	private toastrService: ToastrService,
    private router: Router
    ) {}




  ngOnInit() {
  	
  }


  /**
   * Cancels the creation of the new calificacion
  * Redirects to the user' list page  
  */
  cancelCreation(): void {
      this.toastrService.warning('La calificación no fue creada', 'Registro calificacion'); 
      this.router.navigate(['trayecto']);

}
}