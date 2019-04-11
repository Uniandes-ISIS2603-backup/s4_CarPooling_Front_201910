import { Component, OnInit } from '@angular/core';
import { UsuarioCreateComponent } from '../usuario-create/usuario-create.component'
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
  	) { }

  usuarioActual : UsuarioDetail;

  
  ngOnInit() {
  }

}
