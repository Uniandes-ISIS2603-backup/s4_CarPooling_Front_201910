import { Component, OnInit } from "@angular/core";
import { PeajeService } from "../peaje.service";
import { Peaje } from "../peaje";

@Component({
  selector: "app-listar-peaje",
  templateUrl: "./listar-peaje.component.html",
  styleUrls: ["./listar-peaje.component.css"]
})
export class ListarPeajeComponent implements OnInit {
  peaje: Peaje[];

  constructor(private service: PeajeService) {}
  getAlquiler(): void {
    this.service.getPeaje().subscribe(a => (this.peaje = a));
  }
  ngOnInit() {
    this.getAlquiler();
  }
}
