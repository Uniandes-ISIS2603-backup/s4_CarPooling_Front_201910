import { Component, OnInit } from '@angular/core';
import { UsuarioCreateComponent } from '../usuario-create/usuario-create.component'
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
        private usuarioService: UsuarioService,
        private toastrService: ToastrService
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

  logOut(){
    
    this.usuarioService.logOut();
    this.toastrService.success("Su secion se cerro exitosamente", "Sesion Cerrada");

  }

}
