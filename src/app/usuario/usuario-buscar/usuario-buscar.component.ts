import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.css']
})
export class UsuarioBuscarComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  /*
   * Nombre buscado por el usuario 
   */
  nombre : String;
  
  /*
   * Apellido buscado por el usuario 
   */
  apellido : String;

  /*
  * Lista completa de usuarios
  */
  usuarios : Usuario[];

  /*
  * Lista de usuarios que cumplen con las condiciones de búsqueda deseadas
  */
  usuariosBuscados: Usuario[];

  /**
   * Listar los usuarios que cumplen la condición deseada
   */
  listarUsuarios(){
    this.usuarioService.getUsuarios()
            .subscribe(usuarios => {
              this.usuarios = usuarios;
              var j = 0;
              for(var i = 0; i<this.usuarios.length; i++ )
              {
                if(this.usuarios[i].nombre === this.nombre && this.usuarios[i].apellido === this.apellido)
                {
                   this.usuariosBuscados[j] = this.usuarios[i];
                   j++;
                }
              }
            });       
  }

  ngOnInit() {
  }

}
