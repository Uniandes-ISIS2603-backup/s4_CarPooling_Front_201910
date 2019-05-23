import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';

import {ToastrService} from 'ngx-toastr';
import { VehiculoService } from '../vehiculo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css']
})
export class VehiculoCreateComponent implements OnInit {

  /**
  * Base user for the creation of new vehicle
  */
    vehiculo = new Vehiculo();

    
    cuenta : number;



 /**
   * Constructor for the component
   * @param toastrService The toastr to show messages to the user
   */
 constructor(
   private toastrService: ToastrService,
   private vehiculoService: VehiculoService,
   private router: Router
   ) {
     this.cuenta = 1001;
}

 ngOnInit() {
 }

 /**
  * Cancels the creation of the new user
 * Redirects to the user' list page  
 */
 cancelCreation(): void {
     this.toastrService.warning('El vehiculo no fue creado', 'Creación de vehiculo'); 
     this.router.navigate(['home']);
 }

 /**
 * Cancels the creation of the new user
 * Redirects to the user' list page  
 */
  createVehiculo(){
  this.vehiculo.alquilado = false;
  console.log(this.vehiculo); 
  this.vehiculoService.createVehiculo(this.vehiculo)
           .subscribe(vehiculo => {
               this.vehiculo = vehiculo;
               this.toastrService.success("El vehiculo fue creado con éxito", "Creación de vehiculo");
           });
  return this.vehiculo;
 }

 /**
 * Le agrega un vehiculo al usuario actual
 */
agregarVehiculoUsuario(){
  this.vehiculo.alquilado = false;
  var usuarioActual = this.vehiculoService.darUsuarioActual();
  console.log(this.vehiculo); 
  this.vehiculoService.agregarVehiculoUsuario(this.vehiculo)
           .subscribe(vehiculo => {
               this.vehiculo = vehiculo;
               this.toastrService.success("El vehiculo fue agregado con éxito al usuario " + usuarioActual, "Creación de vehiculo");
           });
  return this.vehiculo;
 }

 
}
