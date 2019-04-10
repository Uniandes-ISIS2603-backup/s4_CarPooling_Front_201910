import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {PagoService} from '../pago.service';
import { Info } from '../info';


@Component({
  selector: 'app-pago-edit',
  templateUrl: './pago-edit.component.html',
  styleUrls: ['./pago-edit.component.css']
})
export class PagoEditComponent implements OnInit {

  constructor(

        private pagoService: PagoService,
        private toastrService: ToastrService,


  	) { }

  pago : PagoDetail;

  updatePago(){
  this.pagoService.updatePago(this.pago)
            .subscribe(() => {
                this.toastrService.success("Se editó el pago", 'Edición pago');
            });
  }

  ngOnInit() {
  }

}
