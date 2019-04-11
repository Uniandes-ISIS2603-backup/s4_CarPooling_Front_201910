import { Component, OnInit } from '@angular/core';
import {VehiculoService} from '../vehiculo.service';
import {Vehiculo} from '../vehiculo';
@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculo: Vehiculo[];

  constructor(private service:VehiculoService) { }
  getVehiculo():void{
      this.service.getVehiculo().subscribe
      (a => this.vehiculo = a);
  }
  ngOnInit() {
    this.getVehiculo();
  }

}
