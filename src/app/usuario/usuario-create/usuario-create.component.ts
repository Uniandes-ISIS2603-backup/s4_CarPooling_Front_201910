import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';

import {ToastrService} from 'ngx-toastr';
import {UsuarioService} from '../usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  /**
  * Base user for the creation of new users
  */
  usuario = new Usuario();
  
    /**
    * Constructor for the component
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
    private toastrService: ToastrService,
    private usuarioService: UsuarioService,
    private router: Router

    ) { }

  ngOnInit() {
  }

  /**
   * Cancels the creation of the new user
  * Redirects to the user' list page  
  */
  cancelCreation(): void {
      this.toastrService.warning('El usuario no fue creado', 'Registro usuario'); 
  }

  createUsuario(){
    this.usuarioService.createUsuario(this.usuario)
            .subscribe(usuario => {
                this.usuario = usuario;
                this.toastrService.success("El usuario fue creado con éxito", "Usuario Creado");
                //redireccionar 

            });
        return this.usuario;
  }

  darUsuarioActual(): UsuarioDetail {
    return this.usuario;
  }
  
  get currentUser() { return JSON.stringify(this.usuario); }
 

}
