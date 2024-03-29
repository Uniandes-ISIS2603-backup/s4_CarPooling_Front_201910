import { Component, OnInit, EventEmitter } from "@angular/core";
import { Peaje } from "../peaje";
import { ToastrService } from "ngx-toastr";
import { PeajeService } from "../peaje.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-crear-peaje",
  templateUrl: "./crear-peaje.component.html",
  styleUrls: ["./crear-peaje.component.css"]
})
export class CrearPeajeComponent implements OnInit {
  peaje = new Peaje();
  cancel = new EventEmitter();
  update = new EventEmitter();

  constructor(
    private toastrService: ToastrService,
    private peajeService: PeajeService,
    private router: Router
  ) {}

  ngOnInit() {}

  cancelCreation(): void {
    this.toastrService.warning("El peaje no fue creado", "Registro peaje");
  }

  /* Conexión con el servicio
   *
   */
  createPeaje() {
    console.log(this.peaje);
    this.peajeService.createPeaje(this.peaje).subscribe(peaje => {
      this.peaje = peaje;

      this.toastrService.success(
        "El peaje fue creado con éxito",
        "peaje Creado"
      );
    });
    this.update.emit();
    return this.peaje;
  }

  darPeajeActual(): Peaje {
    return this.peaje;
  }

  get currentPeaje() {
    return JSON.stringify(this.peaje);
  }
  cancelEdition(): void {
    this.cancel.emit();
  }
}
