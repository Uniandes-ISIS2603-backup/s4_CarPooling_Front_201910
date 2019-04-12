import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {InfoTrayectoService} from '../info-trayecto.service';
import {Router} from '@angular/router';
import {InfoTrayecto} from '../info-trayecto';


@Component({
  selector: 'app-edit-info-trayecto',
  templateUrl: './edit-info-trayecto.component.html',
  styleUrls: ['./edit-info-trayecto.component.css']
})
export class EditInfoTrayectoComponent implements OnInit {

  constructor(private trayectoService: InfoTrayectoService,
        private toastrService: ToastrService,
        private router: Router) { }

  info : InfoTrayecto;

updateUsuario(){
  this.trayectoService.updateInfoTrayecto(this.info)
            .subscribe(() => {
                this.toastrService.success("Se editó el Info Trayecto", 'Edición Info Trayecto');
            });
  }


  ngOnInit() {
  }

}
