import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';
import { PagoService } from '../pago.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-list',
  templateUrl: './pago-list.component.html',
  styleUrls: ['./pago-list.component.css']
})
export class PagoListComponent implements OnInit {

	/**
     * Constructor for the component
     * @param pagoService The payment's services provider
     */
    constructor(private pagoService: PagoService, private router: Router) { }
    
    /**
     * The list of payments which belong to Carpooling
     */
    pagos: Pago[];

    /**
     * Asks the service to update the list of payments
     */
    getPagos(): void {
        this.pagoService.getPagos().subscribe(pagos => this.pagos = pagos);
    }

    /**
     * This will initialize the component by retrieving the list of payments from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getPagos();
    }

}
