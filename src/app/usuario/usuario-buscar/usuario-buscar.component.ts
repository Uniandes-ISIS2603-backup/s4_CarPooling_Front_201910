import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.css']
})
export class UsuarioBuscarComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  /*
   * Nombre buscado por el usuario 
   */
  nombre : string;
  
  /*
   * Apellido buscado por el usuario 
   */
  apellido : string;

  /*
   * username buscado por el usuario 
   */
  username : string;

  /*
  * Lista completa de usuarios
  */
  usuarios : Usuario[];

  /*
  * Lista de usuarios que cumplen con las condiciones de búsqueda deseadas
  */
  usuariosBuscados = new Array<Usuario>();


  /**
   * Listar los usuarios que cumplen la condición deseada
   */

  buscarUsuarios(){
    console.log("AQUI :3")
    this.usuarioService.getUsuarios()
            .subscribe(usuarios => {
              this.usuarios = usuarios;

              for(var i = 0; i<this.usuarios.length; i++ )
              {
                var usuario = this.usuarios[i];
                

                if(this.nombre==null || usuario.nombre==this.nombre)
                { 
                  if(this.apellido==null || usuario.apellido==this.apellido)
                  {
                    if(this.username==null || usuario.username==this.username)
                    {
                      this.usuariosBuscados.push(usuario);
                    }
                  }
                }
        
              }
              console.log(this.usuariosBuscados);
              this.usuarioService.updateUsuariosBuscados(this.usuariosBuscados);
              this.router.navigate(['/usuario/menu', { outlets: { 'content': 'buscarUsuarioLista' } }]);
              return this.usuariosBuscados;
            });    
            
            //[routerLink]= "['/usuario/menu', { outlets: { 'content': 'buscarUsuarioLista' } }]"
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(user=>{this.usuarios=user});
  }

}
