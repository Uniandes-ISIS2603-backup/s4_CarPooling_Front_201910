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
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

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
    private ciudadService: CiudadService,
    private peajeService: PeajeService,
    private usuarioService: UsuarioService,
    private router: Router,
  ) 
  {   }
  
  /**
   * Trauecto nuevo
   */
  trayecto = new TrayectoDetail();

  /**
   * info trayecto nuevo
   */
  infoTrayecto = new InfoTrayecto();

  /*
   *Usuario actualmente loggeado
   */
  usuarioActual: Usuario;
  /**
   * lista completa de ciudades
   */
  ciudades: Ciudad[];

  /**
   * Lista completa de peajes
   */
  peajes: Peaje[];

  

  productForm: FormGroup;


  ngOnInit() {
    this.trayecto = new TrayectoDetail();
    this.infoTrayecto = new InfoTrayecto();
    this.trayecto.info = this.infoTrayecto;
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
    this.peajeService.getPeaje().subscribe(peajes => {
      this.peajes = peajes;
    });
    this.getCurretUsuario();

     /* Initiate the form structure */
     /* Initiate the form structure */
    this.productForm = this.fb.group({
      title: [],
      selling_points: this.fb.array([this.fb.group({point:''})])
    })
  }

  get sellingPoints() {
    return this.productForm.get('selling_points') as FormArray;
  }

  /////// This is new /////////////////

  addSellingPoint() {
    this.sellingPoints.push(this.fb.group({point:''}));
  }

  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index);
  }

  //////////// End ////////////////////
  

  cancelCreation(): void {
    this.toastrService.warning(
      "El Trayecto no fue creado",
      "Registro Trayecto"
    );
    this.router.navigate(["home"]);
  }

  createTrayecto() {
    let dateB1: Date = new Date(
      this.trayecto.fechaInicial.year,
      this.trayecto.fechaInicial.month - 1,
      this.trayecto.fechaInicial.day
    );
    this.trayecto.fechaInicial = this.dp.transform(dateB1, "yyyy-MM-dd");

    let dateB2: Date = new Date(
      this.trayecto.fechaInicial.year,
      this.trayecto.fechaInicial.month - 1,
      this.trayecto.fechaInicial.day
    );
    this.trayecto.fechaInicial = this.dp.transform(dateB1, "yyyy-MM-dd");

    this.trayecto.conductor = this.usuarioActual;
    console.log(this.trayecto.fechaInicial);
    this.trayectoService.createTrayecto(this.trayecto).subscribe(trayecto => {
      this.trayecto = trayecto;
      this.toastrService.success(
        "El trayecto fue con éxito",
        "Trayecto Creado"
      );
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
      });
  }

  horaSalida = {hour: 13, minute: 30};
  horaLlegada = {hour: 13, minute: 30};

}

