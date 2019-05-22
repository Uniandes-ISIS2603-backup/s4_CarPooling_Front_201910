import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { UsuarioDetail } from '../../usuario/usuario-detail';
import { Usuario } from '../../usuario/usuario';
import { Trayecto } from '../trayecto';
import { TrayectoService } from '../trayecto.service';

@Component({
  selector: 'app-trayectos-futuros',
  templateUrl: './trayectos-futuros.component.html',
  styleUrls: ['./trayectos-futuros.component.css']
})
export class TrayectosFuturosComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService, private trayectoService: TrayectoService
  ) {}

   usuario : UsuarioDetail;
  usernameActual: string;
  usuarios:Usuario[];
  trayectos: Trayecto[];

  ngOnInit() {
    console.log(this.trayectos);
    this.getCurretUsuario();
    this.usuarioService.getUsuarios().subscribe(user=>{this.usuarios=user; this.asignarTrayecto()});

    console.log(this.usuario);
    console.log(this.usuarios);
    //this.trayectos = this.usuario.trayectoActualConductor;
    this.asignarTrayecto();

  }

  getTrayectos(): void {
    this.trayectoService.getTrayectos().subscribe(trayectos => this.trayectos = trayectos);
}


  darUsuarioActual(): string {
    return this.usuarioService.darUsuarioActual();
  }

  asignarTrayecto(): void {
    if(this.usuario != null){
      this.trayectos = this.usuario.trayectoActualConductor;
      console.log("!");
      console.log(this.trayectos);
      this.trayectos.forEach(element => {
        console.log(element);
          if(element.estado != 0){
            this.trayectos.pop();
          }
        }
      );
      }

    console.log(this.trayectos);
  
  }

  getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    if(this.usernameActual != "vacio"){
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
                console.log(this.usuario);
            });     
            this.asignarTrayecto();
    }
  } 



}
