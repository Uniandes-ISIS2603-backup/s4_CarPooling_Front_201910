import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { TrayectoService } from '../trayecto.service';
import { UsuarioDetail } from '../../usuario/usuario-detail';
import { Usuario } from '../../usuario/usuario';
import { Trayecto } from '../trayecto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-trayectos',
  templateUrl: './mis-trayectos.component.html',
  styleUrls: ['./mis-trayectos.component.css']
})
export class MisTrayectosComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService, 
    private trayectoService: TrayectoService,
    private router: Router

  ) { }

  usuario : UsuarioDetail;
  usernameActual: string;
  usuarios:Usuario[];
  trayectosC: Trayecto[];



  ngOnInit() {
      this.getCurretUsuario();
  }



  getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
                console.log(this.usuario);
            });     
            this.getTrayectosC();
  }

  getTrayectosC(): void {
    if(this.usuario != null){
    this.trayectosC = this.usuario.trayectoActualConductor;
    console.log(this.trayectosC);
  }
  }

  volver()
  {

    this.router.navigate(['home']);
  }
}