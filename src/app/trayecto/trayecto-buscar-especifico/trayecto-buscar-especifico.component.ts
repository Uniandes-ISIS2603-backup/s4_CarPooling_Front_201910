import { Component, OnInit, Input } from '@angular/core';
import { TrayectoService } from '../trayecto.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TrayectoDetail } from '../trayecto-detail';

@Component({
  selector: 'app-trayecto-buscar-especifico',
  templateUrl: './trayecto-buscar-especifico.component.html',
  styleUrls: ['./trayecto-buscar-especifico.component.css']
})
export class TrayectoBuscarEspecificoComponent implements OnInit {

  constructor(
    private trayectoService: TrayectoService,
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
  t: TrayectoDetail;
 
  idTrayecto: number;
  ngOnInit() {
    this.idTrayecto = this.usuarioService.getTrayectoMostrar();
    console.log(this.idTrayecto);
    this.trayectoService.getTrayectoDetail(this.idTrayecto).subscribe(trayecto => {this.t = trayecto});
  }

}
