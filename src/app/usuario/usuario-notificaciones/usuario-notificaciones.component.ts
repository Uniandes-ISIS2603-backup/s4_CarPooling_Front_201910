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
  ) {}

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
    this.noticacionService.updateNotificacion(notificacion).subscribe();
    this.toastrService.success(
      "El usuario " +
        this.nuevoPasajero.username +
        " fue notificado sobre su decision de aceptarlo como pasejero y fue agregado con éxito",
      "Notificacion enviada"
    );
  }

  /**
   * Marca como leida una notificacion
   */
  rechazarAUnPasajero(trayecto, pasajero, notificacion) {
    this.nuevoPasajero = pasajero;
    this.trayectoMeterPasajero = trayecto;
    this.notificacionP = new Notificacion();
    this.notificacionP.emisor = this.usuarioActual;
    this.notificacionP.fecha = new Date();
    this.notificacionP.receptor = this.nuevoPasajero;
    this.notificacionP.leido = false;
    this.notificacionP.mensaje = "no acepto";
    this.notificacionP.tipo = 2;
    this.notificacionP.trayecto = this.trayectoMeterPasajero;
    this.noticacionService.createNotificacion(this.notificacionP).subscribe();
    notificacion.leido = true;
    console.log(notificacion);
    //this.noticacionService.updateNotificacion(notificacion).subscribe();
    this.toastrService.success(
      "El usuario " +
        this.nuevoPasajero.username +
        " fue notificado sobre su decision de no aceptarlo como pasejero y no fue agregado con éxito",
      "Notificacion enviada"
    );
  }

  marcarComoLeida(notificacion) {
    notificacion.leido = true;
    this.noticacionService.updateNotificacion(notificacion).subscribe();
  }

  eliminarNotificacion(notificacion: Notificacion) {
    notificacion.emisor = null;
    notificacion.receptor = null;
    notificacion.trayecto = null;
    this.noticacionService
      .updateNotificacion(notificacion)
      .subscribe(notificacion => {
        this.noticacionService.deleteNotifacion(notificacion.id).subscribe();
      });
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
