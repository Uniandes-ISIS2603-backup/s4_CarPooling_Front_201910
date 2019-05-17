import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { UsuarioDetail } from '../../usuario/usuario-detail';
import { Usuario } from '../../usuario/usuario';

@Component({
  selector: 'app-trayectos-futuros',
  templateUrl: './trayectos-futuros.component.html',
  styleUrls: ['./trayectos-futuros.component.css']
})
export class TrayectosFuturosComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService
  ) {}

   usuario : UsuarioDetail;
  usernameActual: string;
  usuarios:Usuario[];

  ngOnInit() {
    this.getCurretUsuario();
    this.usuarioService.getUsuarios().subscribe(user=>{this.usuarios=user});

  }


  darUsuarioActual(): string {
    return this.usuarioService.darUsuarioActual();
  }

  getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
                console.log(this.usuario);
            });
  } 

}
