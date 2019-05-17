import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { ConsoleReporter } from 'jasmine';


@Component({
  selector: 'app-usuario-buscar-lista',
  templateUrl: './usuario-buscar-lista.component.html',
  styleUrls: ['./usuario-buscar-lista.component.css']
})
export class UsuarioBuscarListaComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  /*
  * Lista de usuarios que cumplen con las condiciones de búsqueda deseadas
  */
 usuariosBuscados : Usuario[];

  ngOnInit() {
    this.usuariosBuscados = this.usuarioService.getUsuariosBuscados();
  }

}
