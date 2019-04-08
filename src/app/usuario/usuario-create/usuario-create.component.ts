import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  /**
  * Base user for the creation of new users
  */
  usuario = new Usuario();;
  
    /**
    * Constructor for the component
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
    private toastrService: ToastrService,

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
    this.usuario.id = Math.floor(Math.random() * 100) + 1;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuario))
  }
  
  get currentUser() { return JSON.stringify(this.usuario); }
 

}
