import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { TrayectoService } from '../trayecto.service';
import { UsuarioDetail } from '../../usuario/usuario-detail';
import { Usuario } from '../../usuario/usuario';
import { Trayecto } from '../trayecto';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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
  trayectosP: Trayecto[];



  ngOnInit() {
    this.getTrayectosP(); 
    this.getCurretUsuario();
  }


  pago(trayecto:string)
  {
    localStorage.setItem("trayectoPago",trayecto);
    console.log(trayecto)
    this.router.navigate(["pago/create"]);

    
  }  
 getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
                console.log(this.usuario);
            });     
            this.getTrayectosP();
  }

  getTrayectosP(): void {
    
    this.trayectoService.getTrayectos().subscribe(trayectos => this.trayectosP = trayectos);

  
  }

  detail(id)
  {
    localStorage.setItem('trayecto',id);
    
    this.router.navigate(['trayecto/trayecto-detail-calificar']);
  }

 
}