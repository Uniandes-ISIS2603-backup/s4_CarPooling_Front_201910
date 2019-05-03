import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {
/**
  * Base user for the creation of new users
  */
  usuario = new Usuario();
  usuario2 = new Usuario();
  lista : Usuario[];


  /**
    * Constructor for the component
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
    private toastrService: ToastrService,
    private usuarioService: UsuarioService,
    private router: Router

    ) { 
}

  ngOnInit() {
  }

  /**
   * Cancela el login
  */
  cancelLogin(): void {
      this.toastrService.warning('El usuario no fue creado', 'Registro usuario'); 
      this.router.navigate(['home']);

  }
  /**
   * Login del usuario
   */
  login(){
    console.log(this.usuario2);
    this.usuarioService.getUsuarios()
            .subscribe(lista => {
              this.lista = lista;
              var encontro = 0;
              this.toastrService.success("usuario" + this.usuario2.username, "Usuario Creado");
              for(var i = 0; i<this.lista.length; i++ )
              {
                if(this.lista[i].username === this.usuario2.username)
                {
                   if(this.lista[i].password === this.usuario2.password)
                   {
                      this.usuario2 = this.lista[i];
                      localStorage.setItem('usuarioActual', this.usuario2.username);
                      this.toastrService.success("El usuario fue creado con éxito", "Usuario Creado");
                      this.router.navigate(['home']);
                      encontro = 1;
                   }
                   else
                   {
                    this.toastrService.error("El nombre de ususario o al contraseña son incorrectos", "Usuario no encontrado");
                    encontro = 1;
                   }
                }
              }
              if(encontro == 0)
              {
                this.toastrService.error("No existe el nombre de usuario", "Usuario no encontrado");
              }
            });
       
        return this.usuario;
  }

  /**
   * El nombre de usuario del usuario que acaba de registrarse
   */
  get currentUser() { return JSON.stringify(this.usuario); }

}
