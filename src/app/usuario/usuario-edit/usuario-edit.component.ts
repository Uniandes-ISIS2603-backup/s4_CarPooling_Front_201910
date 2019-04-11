import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UsuarioService} from '../usuario.service';
import { UsuarioDetail } from '../usuario-detail';


@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  constructor(
        private usuarioService: UsuarioService,
        private toastrService: ToastrService
  	) { }

  usuario : UsuarioDetail;

  usernameActual: string;

  updateUsuario(){
  this.usuarioService.updateUsuario(this.usuario)
            .subscribe(() => {
                this.toastrService.success("Se editó el usuario", 'Edición usuario');
            });
  }

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
