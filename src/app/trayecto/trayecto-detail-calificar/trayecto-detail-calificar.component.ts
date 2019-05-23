import { Component, OnInit } from '@angular/core';
import { Trayecto } from '../trayecto';
import { TrayectoService } from '../trayecto.service';


@Component({
  selector: 'app-trayecto-detail-calificar',
  templateUrl: './trayecto-detail-calificar.component.html',
  styleUrls: ['./trayecto-detail-calificar.component.css']
})
export class TrayectoDetailCalificarComponent implements OnInit {

  
  constructor(private trayectoService: TrayectoService) { }
  id:string;
  usernameActual:string;
  t:Trayecto;
  ngOnInit() {
    this.id=localStorage.getItem('trayecto');
    
    this.trayectoService.getTrayectoDetail(this.id).subscribe(a=>{this.t=a});
  }



  



  



  
}
