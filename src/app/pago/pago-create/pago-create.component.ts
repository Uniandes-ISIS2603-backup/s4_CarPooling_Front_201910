import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';
import { Info } from '../info';

import {ToastrService} from 'ngx-toastr';
import {PagoService} from '../pago.service';
import {Router} from '@angular/router';
import { TrayectoService } from '../../trayecto/trayecto.service';
import { Trayecto } from '../../trayecto/trayecto';


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
  info = new Info();
  
  valor:number;
  trayecto:Trayecto;
    /**
    * Constructor for the component
    * @param toastrService The toastr to show messages
    */
  constructor(
    private toastrService: ToastrService,
    private pagoService: PagoService,
    private router: Router,
    private trayectoService:TrayectoService,

    ) { }

  ngOnInit() {
    var id=localStorage.getItem("trayectoPago");
    this.valor=0;
    if(id!=null){
    this.trayectoService.getTrayectoDetail(id).subscribe(a=>{
  
      this.trayecto=a;
      if(a!=null&&a.info!=null){
      this.valor = a.info.costo;
      }
    });
    console.log(this.valor.toString());
  }
  
  }
  pagoEfectivo()
  {
    this.pago.valor=this.valor;
    this.pagoService.createPago(this.pago).subscribe(paga=>{
      this.pagoService.createInfo(this.info).subscribe(inf=>{
        this.pagoService.addRelacion(this.trayecto,paga,inf).subscribe(()=>{

          this.router.navigate(["home"]);
        });
      })
      
    });
  }
  tarjeta()
  {
    this.pago.valor=this.valor;
    this.pagoService.createPago(this.pago).subscribe(paga=>{
      this.pagoService.createInfo(this.info).subscribe(inf=>{
        this.pagoService.addRelacion(this.trayecto,paga,inf).subscribe(()=>{
          this.router.navigate(["home"]);
        });
      })
      
    });
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
                
                this.toastrService.success("El pago fue creado con éxito", "Pago creado");

            });
        return this.pago;
  }

  darInfo() {
   
  }
  
  get currentPayment() { return JSON.stringify(this.pago); }
 

}
