import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { HomeServiceService } from './home/home-service.service';

import { Router } from '@angular/router';
import { UsuarioDetail } from './usuario/usuario-detail';
import { UsuarioService } from './usuario/usuario.service';



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
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s4_carpooling-Front";
        this.authService.start();
        this.getCurretUsuario();
        
    }
    ngAfterContentChecked(){
      this.getCurretUsuario();
    }

    usuario : UsuarioDetail;
  usernameActual: string;

       /**
     * @ignore
     */
    constructor(private authService: AuthService, private home:HomeServiceService,private router: Router,private usuarioService: UsuarioService,) { }

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
                    
                    
                });
        }
      } 
}





