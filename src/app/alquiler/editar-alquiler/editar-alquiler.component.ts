import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AlquilerServiceService} from '../alquiler-service.service'
import { Alquiler } from '../alquiler';
@Component({
  selector: 'app-editar-alquiler',
  templateUrl: './editar-alquiler.component.html',
  styleUrls: ['./editar-alquiler.component.css']
})
export class EditarAlquilerComponent implements OnInit, OnChanges{
  
  constructor(
    private alquilerService: AlquilerServiceService,
    private toastrService: ToastrService,
    ) { }

    alquiler : Alquiler;
    cancel = new EventEmitter();
    update = new EventEmitter();

  updatealquiler(){
  this.alquilerService.updatealquiler(this.alquiler)
            .subscribe(() => {
                this.toastrService.success("Se editó el alquiler", 'Edición alquiler');
            }); 
            this.update.emit();
  }
  cancelEdition(): void {
    this.cancel.emit();
}
  ngOnInit() {
  }
  ngOnChanges() {
    this.ngOnInit();
}

}
