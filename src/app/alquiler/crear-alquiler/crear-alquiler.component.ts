import { Component, OnInit, EventEmitter } from '@angular/core';
import { Alquiler } from '../alquiler';
import { ToastrService } from 'ngx-toastr';
import { AlquilerServiceService } from '../alquiler-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',
  styleUrls: ['./crear-alquiler.component.css']
})
export class CrearAlquilerComponent implements OnInit {

    alquiler = new Alquiler();
    cancel = new EventEmitter();
    update = new EventEmitter();
  
 
constructor(
 private toastrService: ToastrService,
 private alquilerService: AlquilerServiceService,
 private router: Router

 ) { }

ngOnInit() {
}


cancelCreation(): void {
   this.toastrService.warning('El alquiler no fue creado', 'Registro alquiler'); 
}

createAlquiler(){
 this.alquilerService.createalquiler(this.alquiler)
         .subscribe(alquiler => {
             this.alquiler = alquiler;
             this.toastrService.success("El alquiler fue creado con éxito", "alquiler Creado");

         });
         this.update.emit();
     return this.alquiler;
     
}

darAlquilerActual(): Alquiler {
 return this.alquiler;
}

get currentAlquiler() { return JSON.stringify(this.alquiler); }
cancelEdition(): void {
  this.cancel.emit();
}

}
