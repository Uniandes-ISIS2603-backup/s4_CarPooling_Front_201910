import { Component, OnInit } from '@angular/core';
import { Seguro } from '../seguro';
import { SeguroServiceService } from '../seguro-service.service';

@Component({
  selector: 'app-listar-seguro',
  templateUrl: './listar-seguro.component.html',
  styleUrls: ['./listar-seguro.component.css']
})
export class ListarSeguroComponent implements OnInit {
  seguro: Seguro[];

  constructor(private service:SeguroServiceService) { }
  getSeguros():void{
      this.service.getSeguro().subscribe
      (a => this.seguro = a);
  }
  ngOnInit() {
    this.getSeguros();
  }

}
