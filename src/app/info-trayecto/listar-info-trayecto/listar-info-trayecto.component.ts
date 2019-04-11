import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoTrayectoService } from '../info-trayecto.service';
import {InfoTrayecto} from '../info-trayecto';

@Component({
  selector: 'app-listar-info-trayecto',
  templateUrl: './listar-info-trayecto.component.html',
  styleUrls: ['./listar-info-trayecto.component.css']
})
export class ListarInfoTrayectoComponent implements OnInit {

  constructor(private infoTrayectoService: InfoTrayectoService, private router: Router) { }

  infos: InfoTrayecto[];

  getInfos(): void {
        this.infoTrayectoService.getInfoTrayectos().subscribe(info => this.infos = info);
    }


  ngOnInit() {
  	this.getInfos();
  }

}
