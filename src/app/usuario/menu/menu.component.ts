import { Component, OnInit } from '@angular/core';
import { UsuarioCreateComponent } from '../usuario-create/usuario-create.component'
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
        private usuarioService: UsuarioService,
  	) { }

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
