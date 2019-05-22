import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { VehiculoService } from '../../vehiculo/vehiculo.service';
import { Vehiculo } from '../../vehiculo/vehiculo';
import { Router } from '@angular/router';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-vehiculos',
  templateUrl: './usuario-vehiculos.component.html',
  styleUrls: ['./usuario-vehiculos.component.css']
})
export class UsuarioVehiculosComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService, 
    private vehiculoService: VehiculoService, 
    private router: Router
  ) { }

  /**
   * Arreglo que representa los vehiculos del usuario actual
   */
  misVehiculos: Vehiculo[];
  /**
   * Arreglo que representa tosos los vehiculos actualmente registrados
   */
  vehiculos: Vehiculo[];

  /**
   * Usuario actual
   */
  usuario: UsuarioDetail;

  /**
   * Nombre de usuario actual
   */
  usernameActual: string;


  /**
   * Metodo que agrega a misVehiculos los los vehiculos del usuario actual
   */
  getMisVehiculos(): void {
    this.misVehiculos = this.usuario.vehiculos;
  }

  /**
   * Metodo que obtiene el usuario actual
   */
  getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
                this.getMisVehiculos();
                console.log(this.usuario);
                console.log(this.misVehiculos);
            });
  }

  ngOnInit() {
    this.getCurretUsuario();
  }

}
