import { Component, OnInit } from '@angular/core';

import {ToastrService} from 'ngx-toastr';
import {TrayectoService} from '../trayecto.service';
import { TrayectoDetail } from '../trayecto-detail';

@Component({
  selector: 'app-trayecto-edit',
  templateUrl: './trayecto-edit.component.html',
  styleUrls: ['./trayecto-edit.component.css']
})
export class TrayectoEditComponent implements OnInit {

  constructor(
  	private trayectoService: TrayectoService,
        private toastrService: ToastrService
        ) { }

  trayecto : TrayectoDetail;

  updateTrayecto(){
  this.trayectoService.updateTrayecto(this.trayecto)
            .subscribe(() => {
                this.toastrService.success("Se editó el Trayecto", 'Edición Trayecto');
            });
  }

  ngOnInit() {
  }

}
