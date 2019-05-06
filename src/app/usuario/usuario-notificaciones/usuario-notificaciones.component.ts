import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Notificacion } from '../../notificacion/notificacion';
import { Router } from '@angular/router';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-notificaciones',
  templateUrl: './usuario-notificaciones.component.html',
  styleUrls: ['./usuario-notificaciones.component.css']
})
export class UsuarioNotificacionesComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router
  ) { }

  /**
   * Arreglo que representa las Notificaciones Enviadas por el usuario actual
   */
  misNotificacionesEnviadas: Notificacion[];

  /**
   * Arreglo que representa las Notificaciones Recibidas por el usuario actual
   */
  misNotificacionesRecibidas: Notificacion[];

  /**
   * Usuario actual
   */
  usuario: UsuarioDetail;

  /**
   * Nombre de usuario actual
   */
  usernameActual: string;


  /**
   * Metodo que agrega a misNotificaciones los los vehiculos del usuario actual
   */
  getMisNotificaciones(): void {
    this.misNotificacionesEnviadas = this.usuario.notificacionesEnviadas;
    this.misNotificacionesRecibidas = this.usuario.notificacionesRecibidas;
  }

  /**
   * Metodo que obtiene el usuario actual
   */
  getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
                this.getMisNotificaciones();
            });
  }

  ngOnInit() {
    this.getCurretUsuario();
  }
}
