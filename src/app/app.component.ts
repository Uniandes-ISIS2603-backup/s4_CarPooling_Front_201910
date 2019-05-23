import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { HomeServiceService } from './home/home-service.service';

import { Router } from '@angular/router';
import { UsuarioDetail } from './usuario/usuario-detail';
import { UsuarioService } from './usuario/usuario.service';
import { NotificacionService } from './notificacion/notificacion.service';



/**
 * The app component. This component is the base of s4_carpooling-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


       /**
     * @ignore
     */
    constructor(private authService: AuthService, 
      private home:HomeServiceService,
      private router: Router,
      private usuarioService: UsuarioService,
      private notifiacionService: NotificacionService
      ) { 
        this.notificacionesPendientes=0;
      }

   
    /**
     * The title that appears on the NavBar and the web browser
     */
    title: string;
  //Var para las notificaciones pendeintes
  notificacionesPendientes: number;

  /**
   * Se calculan las notificaciones pendientes por leer del usuario. Actualización de la alerta
   */
  calcularNotificacionesPendientes(){
    
    this.notifiacionService.getNotifficaciones()
            .subscribe(notificaciones =>{
              this.notificacionesPendientes =0;
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
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s4_carpooling-Front";
        this.authService.start();
        this.getCurretUsuario();
        
    }
    

    usuario : UsuarioDetail;
  usernameActual: string;
 logout(): void {
    this.authService.logout()
    }
    reset()
    {
        this.home.updateActual(new Array());
        this.router.navigate(['home']);
    }
    darUsuarioActual(): string {
        return this.usuarioService.darUsuarioActual();
      }
    
      getCurretUsuario(){
      
        this.usernameActual = this.usuarioService.darUsuarioActual();
        if(this.usernameActual != "vacio" && this.usernameActual != "no existe"){
        this.usuarioService.getUsuarioDetail(this.usernameActual)
                .subscribe(usuario => {
                    this.usuario = usuario;
                    this.calcularNotificacionesPendientes();
                    
                });
        }
      } 
}





