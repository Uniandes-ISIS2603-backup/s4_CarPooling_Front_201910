import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario = new Usuario(1,'','', 1, 1,'','','');;

  constructor() { }

  ngOnInit() {
  }

  createUsuario(){
    this.usuario.id = Math.floor(Math.random() * 100) + 1;
    console.log(this.cliente);
  }

}
