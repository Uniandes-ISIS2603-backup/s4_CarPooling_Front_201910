import { Component, OnInit } from '@angular/core';
import { PeajeServiceService } from '../peaje-service.service';
import { Peaje } from '../peaje';

@Component({
  selector: 'app-listar-peaje',
  templateUrl: './listar-peaje.component.html',
  styleUrls: ['./listar-peaje.component.css']
})
export class ListarPeajeComponent implements OnInit {

  peaje: Peaje[];

  constructor(private service:PeajeServiceService) { }
  getAlquiler():void{
      this.service.getPeaje().subscribe
      (a => this.peaje = a);
  }
  ngOnInit() {
    this.getAlquiler();
  }

}
