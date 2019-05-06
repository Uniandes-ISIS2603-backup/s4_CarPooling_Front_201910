import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CalificacionService } from '../../calificacion/calificacion.service';
import { Router } from '@angular/router';
import { Calificacion } from '../../calificacion/calificacion';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-calificaciones',
  templateUrl: './usuario-calificaciones.component.html',
  styleUrls: ['./usuario-calificaciones.component.css']
})
export class UsuarioCalificacionesComponent implements OnInit {
  
  constructor(
    private usuarioService: UsuarioService, 
    private calificacionService: CalificacionService, 
    private router: Router
  ) { }

  /**
   * Arreglo que representa los vehiculos del usuario actual
   */
  misCalificaciones: Calificacion[];


  /**
   * Usuario actual
   */
  usuario: UsuarioDetail;

  /**
   * Nombre de usuario actual
   */
  usernameActual: string;


  /**
   * Metodo que agrega a misCalificaciones las calificaciones del usuario actual
   */
  getMisCalificaciones(): void {
    this.misCalificaciones = this.usuario.calificaciones;
  }

  /**
   * Metodo que obtiene el usuario actual
   */
  getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
                this.getMisCalificaciones();
            });
  }

  ngOnInit() {
    this.getCurretUsuario();
  }
}
