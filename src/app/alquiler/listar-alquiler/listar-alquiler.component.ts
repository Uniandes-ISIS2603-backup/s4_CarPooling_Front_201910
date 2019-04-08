import { Component, OnInit } from '@angular/core';
import {AlquilerServiceService} from '../alquiler-service.service';
import {Alquiler} from '../alquiler';
@Component({
  selector: 'app-listar-alquiler',
  templateUrl: './listar-alquiler.component.html',
  styleUrls: ['./listar-alquiler.component.css']
})
export class ListarAlquilerComponent implements OnInit {
  alquiler: Alquiler[];

  constructor(private service:AlquilerServiceService) { }
  getAlquiler():void{
      this.service.getAlquiler().subscribe
      (a => this.alquiler = a);
  }
  ngOnInit() {
    this.getAlquiler();
  }

}
