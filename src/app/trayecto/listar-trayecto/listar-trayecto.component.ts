import { Component, OnInit } from '@angular/core';
import { TrayectoService } from '../trayecto.service';
import { Router } from '@angular/router';
import {Trayecto} from '../trayecto';
import { HomeServiceService } from '../../home/home-service.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { UsuarioDetail } from '../../usuario/usuario-detail';
import { NotificacionService } from '../../notificacion/notificacion.service';
import { Notificacion } from '../../notificacion/notificacion';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-trayecto',
  templateUrl: './listar-trayecto.component.html',
  styleUrls: ['./listar-trayecto.component.css']
})
export class ListarTrayectoComponent implements OnInit {

  constructor( private toastrService: ToastrService,private usuarioService: UsuarioService,private trayectoService: TrayectoService, private router: Router, private home:HomeServiceService,private notificacionService:NotificacionService) { }
  usuario : UsuarioDetail;
  usernameActual: string;
  trayectos: Trayecto[];
  notificacion:Notificacion;

  getTrayectos(): void {
        this.trayectoService.getTrayectos().subscribe(trayectos => this.trayectos = trayectos);
    }

    modo: string;

  ngOnInit() {
    //this.getTrayectos();
    this.trayectos=this.home.getActual();
    this.getCurretUsuario();
    this.modo = localStorage.getItem("modo");
    console.log(this.modo);
  }
  onClick(trayecto)
  {
    this.notificacion=new Notificacion();
    if(trayecto.conductor!=null){this.notificacion.receptor= trayecto.conductor;}
    this.notificacion.emisor=this.usuario;
    this.notificacion.trayecto=trayecto;
    this.notificacion.leido=false;
    this.notificacion.tipo=1;
    this.notificacion.fecha= new Date();
    this.notificacion.mensaje="El usuario: "+this.usernameActual+" quiere suscribirse al trayecto con id: "+trayecto.id;
    if(true)
    {
      this.notificacionService.createNotificacion(this.notificacion).subscribe(a=> {
        this.toastrService.success("El conductor fue notificado", "Notificacion Enviada");
        this.router.navigate(['/usuario/menu', { outlets: { 'content': 'notificaciones' } }]);
      });
    }
    else{
      this.toastrService.warning("El conductor no puede reservar", "Notificacion No Enviada");
      
    }
   console.log(this.notificacion);


  }
  volver()
  {
    this.home.updateActual(new Array());

    this.router.navigate(['home']);
  }
  darUsuarioActual(): string {
    return this.usuarioService.darUsuarioActual();
  }

  getCurretUsuario(){
    this.usernameActual = this.usuarioService.darUsuarioActual();
    if(this.usernameActual != "vacio"){
    this.usuarioService.getUsuarioDetail(this.usernameActual)
            .subscribe(usuario => {
                this.usuario = usuario;
                console.log(this.usuario);
            });
  } }
  detail(id)
  {
    localStorage.setItem('trayecto',id);
    this.router.navigate(['trayecto/detail']);
  }
}
