import { Component, OnInit } from '@angular/core';
import { Busqueda } from '../busqueda';
import { Ciudad } from '../ciudad';
import { Usuario } from 'src/app/usuario/usuario';
import { Vehiculo } from 'src/app/vehiculo/vehiculo';
import { Peaje } from '../peaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  buscar = new Busqueda();
  ciudades: Ciudad[];
  usuarios: Usuario[];
  peajes: Peaje[];
  vehiculos: Vehiculo[];

  ngOnInit() {
  }
  submit(){
  
  }
   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
}
