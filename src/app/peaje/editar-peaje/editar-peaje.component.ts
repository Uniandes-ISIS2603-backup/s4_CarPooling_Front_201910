import { Component, OnInit, EventEmitter } from '@angular/core';
import { PeajeServiceService } from '../peaje-service.service';
import { ToastrService } from 'ngx-toastr';
import { Peaje } from '../peaje';

@Component({
  selector: 'app-editar-peaje',
  templateUrl: './editar-peaje.component.html',
  styleUrls: ['./editar-peaje.component.css']
})
export class EditarPeajeComponent implements OnInit {

  constructor(
    private peajeService: PeajeServiceService,
    private toastrService: ToastrService,
    ) { }

    peaje = new Peaje() ;
    cancel = new EventEmitter();
    update = new EventEmitter();

  updatealquiler(){
    console.log(this.peaje)
  this.peajeService.updatePeaje(this.peaje)
            .subscribe(() => {
                this.toastrService.success("Se editó el peaje", 'Edición peaje');
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
