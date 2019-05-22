import { Component, OnInit } from '@angular/core';
import { UsuarioCreateComponent } from '../usuario-create/usuario-create.component'
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { NotificacionService } from '../../notificacion/notificacion.service';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
        private usuarioService: UsuarioService,
        private notificacionService: NotificacionService,
        private toastrService: ToastrService,
        private app:AppComponent
  	) { this.notificacionesPendientes = 5;}

  /**
   * Usuario actual
   */
  usuario : UsuarioDetail;

  /**
   * Nombre de usuario actual
   */
  usernameActual: string;

  //Var para las notificaciones pendeintes
  notificacionesPendientes: number;

  /**
   * Se calculan las notificaciones pendientes por leer del usuario. Actualización de la alerta
   */
  calcularNotificacionesPendientes(){
    this.notificacionService.getNotifficaciones()
            .subscribe(notificaciones =>{
                notificaciones.forEach(notificacion=>{
                  //Si ha notifiaciones sin recpetor y no s ehace esta verificacion, el porgrama no funciona
                    if(notificacion.hasOwnProperty('receptor')){
                      if(notificacion.receptor.username === this.usernameActual && !notificacion.leido)
                      {
                        this.notificacionesPendientes++;
                      }
                  }
                })
            }
          );
  }

  /**
   * Salirse de la sesión
   */
  logOut(){
    this.usuarioService.logOut();
    this.toastrService.success("Su sesion se cerro exitosamente", "Sesion Cerrada");
    this.app.getCurretUsuario();
  }

  /**
   * Usuario actual
   */
  getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
            });
  }

  ngOnInit() {
    this.getCurretUsuario();
    this.notificacionesPendientes = 0;
    this.calcularNotificacionesPendientes();
  }

}
