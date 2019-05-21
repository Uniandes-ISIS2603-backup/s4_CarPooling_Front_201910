import { Component, OnInit } from '@angular/core';
import { UsuarioCreateComponent } from '../usuario-create/usuario-create.component'
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { NotificacionService } from '../../notificacion/notificacion.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
        private usuarioService: UsuarioService,
        private notificacionService: NotificacionService,
        private toastrService: ToastrService
  	) { this.notificacionesPendientes = 5;}

  usuario : UsuarioDetail;

  usernameActual: string;

  //Var para las notificaciones pendeintes
  notificacionesPendientes: number;

  

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
  calcularNotificacionesPendientes(){
    this.notificacionService.getNotifficaciones()
            .subscribe(notificaciones =>{
                notificaciones.forEach(notificacion=>{
                    if(notificacion.receptor.username == this.usernameActual && !notificacion.leido)
                    {
                      this.notificacionesPendientes++;
                    }
                  })
            }
          );
  }

  logOut(){
    this.toastrService.success("Su sesion se cerro exitosamente", "Sesion Cerrada");
  }

}
