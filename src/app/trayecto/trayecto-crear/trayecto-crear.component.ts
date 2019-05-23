import { Component, OnInit } from "@angular/core";
import { Trayecto } from "../trayecto";
import { TrayectoDetail } from "../trayecto-detail";

import { ToastrService } from "ngx-toastr";
import { TrayectoService } from "../trayecto.service";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { UsuarioService } from "../../usuario/usuario.service";
import { Usuario } from "../../usuario/usuario";
import { Ciudad } from "../../ciudad/ciudad";
import { CiudadService } from "../../ciudad/ciudad.service";
import { Peaje } from "../../peaje/peaje";
import { PeajeService } from "../../peaje/peaje.service";

import { InfoTrayecto } from "../../info-trayecto/info-trayecto";
import { ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { NgbDate, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { Vehiculo } from "../../vehiculo/vehiculo";
import { UsuarioDetail } from "../../usuario/usuario-detail";
import { InfoTrayectoService } from "../../info-trayecto/info-trayecto.service";
import { jsonpCallbackContext } from "@angular/common/http/src/module";

@Component({
  selector: "app-trayecto-crear",
  templateUrl: "./trayecto-crear.component.html",
  styleUrls: ["./trayecto-crear.component.css"],
  providers: [DatePipe]
})
export class TrayectoCrearComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private dp: DatePipe,
    private toastrService: ToastrService,
    private trayectoService: TrayectoService,
    private infotrayectoService: InfoTrayectoService,
    private ciudadService: CiudadService,
    private peajeService: PeajeService,
    private usuarioService: UsuarioService,
    private router: Router,
    private calendar: NgbCalendar
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), "d", 10);
  }

  /**
   * Trauecto nuevo
   */
  trayecto = new TrayectoDetail();

  /**
   * info trayecto nuevo
   */
  infoTrayecto = new InfoTrayecto();

  /**
   * Vehiculo nuevo en caso de que se cree
   */
  vehiculo = new Vehiculo();

  /*
   *Usuario actualmente loggeado
   */
  usuarioActual: UsuarioDetail;
  /**
   * lista completa de ciudades
   */
  ciudades: Ciudad[];

  /**
   * Lista completa de peajes
   */
  peajes: Peaje[];

  /**
   * Mis carros
   */
  carros: Vehiculo[];

  /**
   * cantidad de carros
   */
  numCarros: number;

  /**
   * parada 1
   */
  parada1: Ciudad;

  /**
   * parada 2
   */
  parada2: Ciudad;

  /**
   * parada 3
   */
  parada3: Ciudad;

  /**
   * Peaje 1
   */
  peaje1: Peaje;

  /**
   * Peaje 1
   */
  peaje2: Peaje;

  /**
   * Peaje 1
   */
  peaje3: Peaje;

  ngOnInit() {
    this.trayecto = new TrayectoDetail();
    this.infoTrayecto = new InfoTrayecto();
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
    this.peajeService.getPeaje().subscribe(peajes => {
      this.peajes = peajes;
    });
    this.getCurretUsuario();

    /* Initiate the form structure */
    /* Initiate the form structure */
    /* this.productForm = this.fb.group({
      title: [],
      selling_points: this.fb.array([this.fb.group({point:''})])
    })*/
  }

  /* get sellingPoints() {
    return this.productForm.get('selling_points') as FormArray;
  }

  /////// This is new /////////////////

  addSellingPoint() {
    this.sellingPoints.push(this.fb.group({point:''}));
  }

  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index);
  }
*/
  //////////// End ////////////////////

  cancelCreation(): void {
    this.toastrService.warning(
      "El Trayecto no fue creado",
      "Registro Trayecto"
    );
    this.router.navigate(["home"]);
  }

  createTrayecto() {
    this.trayecto.id = 1;
    this.trayecto.estado = 0;
    let dateB1: Date = new Date(
      this.fromDate.year,
      this.fromDate.month - 1,
      this.fromDate.day
    );
    this.trayecto.fechaInicial = this.dp.transform(dateB1, "yyyy-MM-dd");
    
    this.trayecto.fechaInicial = this.dp.transform(dateB1, "yyyy-MM-dd");

    this.trayecto.fechaFinal = dateB2; //this.dp.transform(dateB2, "yyyy-MM-dd");

    let dateB3: Date = new Date(
      this.fromDate.year,
      this.fromDate.month - 1,
      this.fromDate.day,
      this.horaSalida.hour,
      this.horaSalida.minute,
      0,
      0
    );
    this.infoTrayecto.horaInicial = dateB3; //this.dp.transform(dateB2, "yyyy-MM-dd");

    let dateB4: Date = new Date(
      this.fromDate.year,
      this.fromDate.month - 1,
      this.fromDate.day,
      this.horaSalida.hour,
      this.horaSalida.minute,
      0,
      0
    );
    this.infoTrayecto.horaFinal = dateB3;
    /** 
    if (this.parada1 != null) {
      this.infoTrayecto.paradas.push(this.parada1);
    }
    if (this.parada2 != null) {
      this.infoTrayecto.paradas.push(this.parada2);
    }
    if (this.parada3 != null) {
      this.infoTrayecto.paradas.push(this.parada3);
    }

    if (this.peaje1 != null) {
      this.infoTrayecto.peajes.push(this.peaje1);
    }
    if (this.peaje1 != null) {
      this.infoTrayecto.peajes.push(this.peaje2);
    }
    if (this.peaje1 != null) {
      this.infoTrayecto.peajes.push(this.peaje3);
    }*/

    //this.infoTrayecto.vehiculo = this.vehiculo;
    /** if (this.numCarros == 0) {
      this.usuarioService
        .addVehiculo(this.usuarioActual.username, this.vehiculo)
        .subscribe(trayecto => {
          this.vehiculo = trayecto;
          this.toastrService.success(
            "El vehiculo de placa " + this.vehiculo.placa + " fue con éxito",
            "Trayecto Creado"
          );
        });
    }*/
    //this.infotrayectoService.
    this.trayectoService.createTrayecto(this.trayecto).subscribe(tray=>{
      this.infotrayectoService.createInfoTrayecto(this.infoTrayecto).subscribe(info=>{
                    this.usuarioService
                    .addConductor(this.usuarioActual.username, tray)
                    .subscribe(t => {
                      this.trayecto = t;
                      this.toastrService.success(
                        "El trayecto fue con éxito",
                        "Trayecto Creado"
                      ); /**
                      this.infotrayectoService
                        .createInfoTrayecto(this.infoTrayecto)
                        .subscribe(info => {
                          this.infoTrayecto = info;
                          this.trayectoService
                            .addTrayectoInfo(this.trayecto.id, this.infoTrayecto.idDetalle)
                            .subscribe();
                        }); */
                    });
      })
    });
    
    return this.trayecto;
  }

  darTrayectoActual(): TrayectoDetail {
    return this.trayecto;
  }

  getCurretUsuario() {
    this.usuarioService
      .getUsuarioDetail(this.usuarioService.darUsuarioActual())
      .subscribe(usuario => {
        this.usuarioActual = usuario;
        this.carros = this.usuarioActual.vehiculos;
        this.numCarros = this.carros.length;
      });
  }

  horaSalida = { hour: 13, minute: 30 };
  horaLlegada = { hour: 13, minute: 30 };

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      date.equals(this.toDate) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
}