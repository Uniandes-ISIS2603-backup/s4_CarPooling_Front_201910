import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../usuario.service";
import { Notificacion } from "../../notificacion/notificacion";
import { Router } from "@angular/router";
import { UsuarioDetail } from "../usuario-detail";
import { TrayectoService } from "../../trayecto/trayecto.service";
import { Usuario } from "../usuario";
import { TrayectoDetail } from "../../trayecto/trayecto-detail";
import { NotificacionService } from "../../notificacion/notificacion.service";
import { ToastrService } from "ngx-toastr";
import { Trayecto } from "../../trayecto/trayecto";

@Component({
  selector: "app-usuario-notificaciones",
  templateUrl: "./usuario-notificaciones.component.html",
  styleUrls: ["./usuario-notificaciones.component.css"]
})
export class UsuarioNotificacionesComponent implements OnInit {
  constructor(
    private toastrService: ToastrService,
    private usuarioService: UsuarioService,
    private trayectoService: TrayectoService,
    private noticacionService: NotificacionService,
    private router: Router
  ) {
    
  }

  /**
   * Arreglo que representa las Notificaciones Enviadas por el usuario actual
   */
  misNotificacionesEnviadas: Notificacion[];

  /**
   * Arreglo que representa las Notificaciones Recibidas por el usuario actual
   */
  misNotificacionesRecibidas: Notificacion[];

  /**
   * Arreglo que representa las Notificaciones leidas por el usuario actual
   */
  noLeidasRecibidas: Notificacion[];

  leidasRecibidas: Notificacion[];

  /**
   * Usuario actual
   */
  usuarioActual: UsuarioDetail;

  /**
   * Nombre de usuario actual
   */
  usernameActual: string;

  /**
   * Trayecto al que se le agregará un pasajero
   */
  trayectoMeterPasajero: TrayectoDetail;

  /**
   * Pasajero al que se le va a agregar un trayecto
   */
  nuevoPasajero: Usuario;

  /**
   * Notificación que se manda al pasajero que fue aceptado / rechazado
   */
  notificacionP: Notificacion;

  /**
   * Metodo que agrega a misNotificaciones los los vehiculos del usuario actual
   */
  getMisNotificaciones(): void {
    this.misNotificacionesEnviadas = this.usuarioActual.notificacionesEnviadas;
    this.misNotificacionesRecibidas = this.usuarioActual.notificacionesRecibidas;
    this.noLeidasRecibidas = new Array<Notificacion>();
    this.leidasRecibidas = new Array<Notificacion>();
    
    this.misNotificacionesRecibidas.forEach(notificacion => {
      if (notificacion.leido) {
        this.leidasRecibidas.push(notificacion);
      } else {
        this.noLeidasRecibidas.push(notificacion);
      }
    });

    //console.log(this.noLeidasRecibidas);
    //console.log(this.leidasRecibidas);
    //console.log(this.misNotificacionesEnviadas);
  }

  /**
   * Usuario no acepta un pasajero en uno de sus trayectos
   */
  agregarAUnPasajero(trayecto, pasajero, notificacion) {
    this.nuevoPasajero = pasajero;
    this.toastrService.success(
      "El usuario " +
        this.nuevoPasajero.username +
        " fue notificado sobre su decision de aceptarlo como pasejero y fue agregado con éxito",
      "Notificacion enviada"
    );
    this.trayectoMeterPasajero = trayecto;
    if (!this.trayectoMeterPasajero.hasOwnProperty("pasajeros")) {
      this.trayectoMeterPasajero.pasajeros = new Array<Usuario>();
    }
    /**
     * PENDIENTEEEEEEE
     */
    this.usuarioService
      .addPasajero(this.nuevoPasajero.username,this.trayectoMeterPasajero.id)
      .subscribe(trayecto=>{  console.log(trayecto)});
    this.notificacionP = new Notificacion();
    this.notificacionP.emisor = this.usuarioActual;
    this.notificacionP.fecha = new Date();
    this.notificacionP.receptor = this.nuevoPasajero;
    this.notificacionP.leido = false;
    this.notificacionP.mensaje = "acepto";
    this.notificacionP.tipo = 2;
    this.notificacionP.trayecto = this.trayectoMeterPasajero;
    this.noticacionService.createNotificacion(this.notificacionP).subscribe();
    notificacion.leido = true;
    this.noticacionService.updateNotificacion(notificacion).subscribe(()=>{window.location.reload()});
   
  }

  /**
   * Marca como leida una notificacion
   */
  rechazarAUnPasajero(trayecto, pasajero, notificacion) {
    
    this.nuevoPasajero = pasajero;
    this.toastrService.success(
      "El usuario " +
        this.nuevoPasajero.username +
        " fue notificado sobre su decision de no aceptarlo como pasejero y no fue agregado con éxito",
      "Notificacion enviada"
    );
    this.trayectoMeterPasajero = trayecto;
    this.notificacionP = new Notificacion();
    this.notificacionP.emisor = this.usuarioActual;
    this.notificacionP.fecha = new Date();
    this.notificacionP.receptor = this.nuevoPasajero;
    this.notificacionP.leido = false;
    this.notificacionP.mensaje = "no acepto";
    this.notificacionP.tipo = 2;
    notificacion.leido = true;
    this.notificacionP.trayecto = this.trayectoMeterPasajero;
    this.noticacionService.createNotificacion(this.notificacionP).subscribe(()=>{
      this.noticacionService.updateNotificacion(notificacion).subscribe(()=>{
      
        window.location.reload();
      });
    });
    
    
   
    
    
  }

  marcarComoLeida(notificacion) {
    notificacion.leido = true;
    this.noticacionService.updateNotificacion(notificacion).subscribe();
    window.location.reload();
  }

  eliminarNotificacion(notificacion: Notificacion) {
   
    this.noticacionService
      .updateNotificacion(notificacion)
      .subscribe(notificacion => {
        notificacion.emisor = null;
        notificacion.receptor = null;
        notificacion.trayecto = null;
        
        this.noticacionService.deleteNotifacion(notificacion.id).subscribe();
        window.location.reload();
        this.router.navigate(["home"]);
      });
  }

  /**
   * Pasar a mostrar un trayecto
   */
  mostrarTrayecto(trayecto: TrayectoDetail)
  {
    this.usuarioService.mostrarTrayecto(trayecto.id);
    this.router.navigate(['/usuario/menu', { outlets: { 'content': 'buscarTrayectoEspecifico' } }]);
  }

  /**
   * 
   */
  mostrarUsuario(usuario : Usuario){
    this.usuarioService.mostrarUsuario(usuario.username);
    this.router.navigate(['/usuario/menu', { outlets: { 'content': 'buscarUsuarioEspecifico' } }]);

  }

  /**
   * Metodo que obtiene el usuario actual
   */
  getCurretUsuario() {
    this.usernameActual = this.usuarioService.darUsuarioActual();
    this.usuarioService
      .getUsuarioDetail(this.usernameActual)
      .subscribe(usuario => {
        this.usuarioActual = usuario;
        this.getMisNotificaciones();
      });
  }

  ngOnInit() {
    this.getCurretUsuario();
  }
}
