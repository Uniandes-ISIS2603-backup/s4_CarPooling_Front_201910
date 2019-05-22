import { Component, OnInit } from '@angular/core';
import {TrayectoService} from '../trayecto.service';
import { Trayecto } from '../trayecto';
@Component({
  selector: 'app-trayecto-detail',
  templateUrl: './trayecto-detail.component.html',
  styleUrls: ['./trayecto-detail.component.css']
})
export class TrayectoDetailComponent implements OnInit {

  constructor(private trayectoService: TrayectoService) { }
  id:string;
  t:Trayecto;
  ngOnInit() {
    this.id=localStorage.getItem('trayecto');
    this.trayectoService.getTrayectoDetail(this.id).subscribe(a=>{this.t=a});
  }

}
