import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';
import { Info } from '../info';

import {ToastrService} from 'ngx-toastr';
import {PagoService} from '../pago.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pago-create',
  templateUrl: './pago-create.component.html',
  styleUrls: ['./pago-create.component.css']
})
export class PagoCreateComponent implements OnInit {

  /**
  * Base payment for the creation of new payments
  */
  pago = new Pago();
  
    /**
    * Constructor for the component
    * @param toastrService The toastr to show messages
    */
  constructor(
    private toastrService: ToastrService,
    private pagoService: PagoService,
    private router: Router

    ) { }

  ngOnInit() {
  }

  /**
   * Cancels the creation of the new payment
  * Redirects to the payments list page  
  */
  cancelCreation(): void {
      this.toastrService.warning('El pago no fue creado', 'Creación pago'); 
  }

  createPago(){
    this.pagoService.createPago(this.pago)
            .subscribe(pago => {
                this.pago = pago;
                this.toastrService.success("El pago fue creado con éxito", "Pago creado");

            });
        return this.pago;
  }

  darInfo(): Info {
    return this.pago;
  }
  
  get currentPayment() { return JSON.stringify(this.pago); }
 

}
