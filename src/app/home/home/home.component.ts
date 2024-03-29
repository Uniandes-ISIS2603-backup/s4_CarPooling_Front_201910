import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../../usuario/usuario.service";
import { Router } from "@angular/router";
import { UsuarioDetail } from "../../usuario/usuario-detail";
import { Busqueda } from "../busqueda";
import { TrayectoService } from "../../trayecto/trayecto.service";
import { HomeServiceService } from "../home-service.service";
import { Trayecto } from "../../trayecto/trayecto";
import { Ciudad } from "../../ciudad/ciudad";

import { Vehiculo } from "../../vehiculo/vehiculo";
import { PeajeService } from "../../peaje/peaje.service";
import { VehiculoService } from "../../vehiculo/vehiculo.service";
import { Usuario } from "../../usuario/usuario";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { CiudadService } from "../../ciudad/ciudad.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private trayectoService: TrayectoService,
    private homeService: HomeServiceService,
    //private ciudadService: CiudadService,
    private peajeService: PeajeService,
    private vehiculoservice: VehiculoService,
   
  ) {}
 

  buscar = new Busqueda();
  retorno = new Array<Trayecto>();
  ciudades: Ciudad[];
  usuarios: Usuario[];
  ciudadesStrings: string[];

  vehiculos: Vehiculo[];
  images = [1, 2, 3, 4].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  );
  ngOnInit() {
   
    this.homeService.getCiudades().subscribe(a=>{this.ciudades=a});
    this.usuarioService.getUsuarios().subscribe(user=>{this.usuarios=user});
    //this.peajeService.getPeaje().subscribe(peaje =>{this.peajes=peaje});
    this.vehiculoservice.getVehiculo().subscribe(v => {
      this.vehiculos = v;
    });
  }

  submit() {
    this.trayectoService.getTrayectos().subscribe(actual => {
      actual.forEach(trayecto => {
        console.log(this.buscar.conductor);
        if (
          this.buscar.conductor == null ||
          (trayecto.conductor != null &&
            trayecto.conductor.username == this.buscar.conductor)
        ) {
          if (
            this.buscar.costo == null ||
            (trayecto.info != null && trayecto.info.costo == this.buscar.costo)
          ) {
            if (
              this.buscar.destino == null ||
              (trayecto.destino != null &&
                trayecto.destino.nombre == this.buscar.destino)
            ) {
              if (
                this.buscar.duracion == null ||
                (trayecto.conductor != null &&
                  trayecto.info.duracion == this.buscar.duracion)
              ) {
                if (
                  this.buscar.estado == null ||
                  trayecto.estado == this.buscar.estado
                ) {
                  if (
                    this.buscar.final == null ||
                    trayecto.fechaFinal == this.buscar.final
                  ) {
                    if (
                      this.buscar.inicio == null ||
                      trayecto.fechaInicial == this.buscar.inicio
                    ) {
                      if (
                        this.buscar.origen == null ||
                        trayecto.origen != null ||
                        trayecto.origen.nombre == this.buscar.origen
                      ) {
                        if (this.buscar.paradas == null) {
                          //Pendiente
                          if (this.buscar.pasajero == null) {
                            //pendiente
                            if (this.buscar.peajes == null) {
                              //pendiente
                              if (this.buscar.vehiculos == null) {
                                //pendiente
                                if (
                                  this.buscar.cupos == null ||
                                  (trayecto.info != null &&
                                    trayecto.info.cupos == this.buscar.cupos)
                                ) {
                                  this.retorno.push(trayecto);
                                  this.homeService.updateActual(this.retorno);
                                  console.log(this.retorno);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        this.router.navigate(["trayecto/list"]);
      });
    });
  }
   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  stringCiudades(){
    this.ciudades.forEach(ciudad => this.ciudadesStrings.push("../../../../"+ ciudad +".jpg"));

  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
