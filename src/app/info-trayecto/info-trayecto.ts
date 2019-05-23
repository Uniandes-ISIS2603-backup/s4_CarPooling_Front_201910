import { Peaje } from "../peaje/peaje";
import { Ciudad } from "../ciudad/ciudad";
import { Vehiculo } from "../vehiculo/vehiculo";

export class InfoTrayecto {
  idDetalle: number;

  costo: number;

  duracion: number;

  cupos: number;

  horaInicial: Date;

  horaFinal: Date;

  paradas: Array<Ciudad>;

  peajes: Array<Peaje>;

  vehiculo: Vehiculo;
}
