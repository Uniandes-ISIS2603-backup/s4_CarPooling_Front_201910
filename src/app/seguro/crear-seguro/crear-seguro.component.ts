import { Component, OnInit, EventEmitter } from '@angular/core';
import { Seguro } from '../seguro';
import { ToastrService } from 'ngx-toastr';
import { SeguroServiceService } from '../seguro-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-seguro',
  templateUrl: './crear-seguro.component.html',
  styleUrls: ['./crear-seguro.component.css']
})
export class CrearSeguroComponent implements OnInit {
  seguro = new Seguro();
  cancel = new EventEmitter();
  update = new EventEmitter();


constructor(
private toastrService: ToastrService,
private seguroService: SeguroServiceService,
private router: Router

) { }

ngOnInit() {
}


cancelCreation(): void {
 this.toastrService.warning('El Seguro no fue creado', 'Registro seguro'); 
}

createSeguro(){
this.seguroService.createSeguro(this.seguro)
       .subscribe(a => {
           this.seguro = a;
           this.toastrService.success("El seguro fue creado con éxito", "seguro Creado");

       });
       this.update.emit();
   return this.seguro;
   
}

darUsuarioActual(): Seguro {
return this.seguro;
}

get currentUser() { return JSON.stringify(this.seguro); }
cancelEdition(): void {
this.cancel.emit();
}

}
