import { Component, OnInit, EventEmitter } from '@angular/core';
import { SeguroServiceService } from '../seguro-service.service';
import { ToastrService } from 'ngx-toastr';
import { Seguro } from '../seguro';

@Component({
  selector: 'app-editar-seguro',
  templateUrl: './editar-seguro.component.html',
  styleUrls: ['./editar-seguro.component.css']
})
export class EditarSeguroComponent implements OnInit {

  constructor(
    private seguroService: SeguroServiceService,
    private toastrService: ToastrService,
    ) { }

    seguro : Seguro;
    cancel = new EventEmitter();
    update = new EventEmitter();

  updatealquiler(){
  this.seguroService.updateSeguro(this.seguro)
            .subscribe(() => {
                this.toastrService.success("Se editó el seguro", 'Edición seguro');
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
