import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
import {UsuarioDetail} from '../usuario-detail';

@Component({
  selector: 'app-usuario-info',
  templateUrl: './usuario-info.component.html',
  styleUrls: ['./usuario-info.component.css']
})
export class UsuarioInfoComponent implements OnInit {

  constructor(
        private usuarioService: UsuarioService,
  	) { 
    }

  usuario : UsuarioDetail;

  usernameActual: string;

  getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
            });
  }

  ngOnInit() {
    this.getCurretUsuario();
  }
}
