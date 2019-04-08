import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

	/**
     * Constructor for the component
     * @param usuarioService The author's services provider
     */
    constructor(private usuarioService: UsuarioService, private router: Router) { }
    
    /**
     * The list of users which belong to Carpooling
     */
    usuarios: Usuario[];

    /**
     * Asks the service to update the list of users
     */
    getUsuarios(): void {
        this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
    }

    /**
     * This will initialize the component by retrieving the list of users from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getUsuarios();
    }

}
