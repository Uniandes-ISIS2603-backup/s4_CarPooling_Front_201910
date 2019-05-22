import { Component, OnInit, Input } from '@angular/core';
import { Trayecto } from '../trayecto';
import { TrayectoService } from '../trayecto.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-trayecto-buscar-especifico',
  templateUrl: './trayecto-buscar-especifico.component.html',
  styleUrls: ['./trayecto-buscar-especifico.component.css']
})
export class TrayectoBuscarEspecificoComponent implements OnInit {

  constructor(
    private tratectoService:TrayectoService,
    private route: ActivatedRoute
  ) { }

  /**
  * The trayecto's id retrieved from the address
  */
 @Input() trayecto_id: number;

  /**
  * El trayecto que se va a mostrar
  */
  trayecto: Trayecto;
 
  loader: any;

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }
  onLoad(params) {
    this.trayecto_id = parseInt(params['id']);
    console.log(" en detail " + this.trayecto_id);
    this.trayecto = new Trayecto();
//  this.getEditorialDetail();
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
