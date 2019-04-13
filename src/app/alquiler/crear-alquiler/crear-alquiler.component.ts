import { Component, OnInit, EventEmitter } from '@angular/core';
import { Alquiler } from '../alquiler';
import { ToastrService } from 'ngx-toastr';
import { AlquilerServiceService } from '../alquiler-service.service';
import { Router } from '@angular/router';
import { AlquilerRelacion } from '../alquiler-relacion';

@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',
  styleUrls: ['./crear-alquiler.component.css']
})
export class CrearAlquilerComponent implements OnInit {

    alquiler = new Alquiler();
    alquiler2 = new AlquilerRelacion();
    cancel = new EventEmitter();
    update = new EventEmitter();
    id:number;
 
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
this.alquiler2.id=this.alquiler.id;
this.alquiler2.nombre=this.alquiler.nombre;
 this.alquilerService.createalquiler(this.alquiler2)
         .subscribe(a => {
             this.alquiler2 = a;
             this.alquilerService.getalquilerDetail(a.id).subscribe(b =>{
              this.alquilerService.createAlquilerRelacion(this.alquiler,a.id);
             });
             this.toastrService.success("El alquiler fue creado con éxito", "alquiler Creado");
             
         });
         this.update.emit();
     return this.alquiler;
     
}

addRelacion(alquiler:Alquiler){
  this.alquilerService.createalquiler(alquiler)
          .subscribe(a => {
              this.alquiler2 = a;
              this.toastrService.success("El alquiler fue creado con éxito para al", "alquiler Creado");
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
