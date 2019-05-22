import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';
import { forEach } from '@angular/router/src/utils/collection';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-buscar-especifico',
  templateUrl: './usuario-buscar-especifico.component.html',
  styleUrls: ['./usuario-buscar-especifico.component.css']
})
export class UsuarioBuscarEspecificoComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) { }

  /**
  * The trayecto's id retrieved from the address
  */
 //@Input() trayecto_id: number;

  /**
  * El trayecto que se va a mostrar
  */
  usuario: UsuarioDetail;
  usu: string;
  calificacionPromedio:number

  darPromedio(): number{
    let suma = 0;
    this.usuario.calificaciones.forEach(calificacion => {
      suma = suma + calificacion.puntaje;
      
    });
    this.calificacionPromedio = suma/this.usuario.calificaciones.length;
    return this.calificacionPromedio;
  }
 
  ngOnInit() {
    this.usu = this.usuarioService.getUsuarioMostrar();
    console.log(this.usu);
    this.usuarioService.getUsuarioDetail(this.usu).subscribe(usuario => {this.usuario = usuario});
  }

}
