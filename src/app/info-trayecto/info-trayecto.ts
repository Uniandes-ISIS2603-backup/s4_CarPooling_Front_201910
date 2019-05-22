import { Peaje } from "../peaje/peaje";
import { Ciudad } from "../ciudad/ciudad";

export class InfoTrayecto {
  idDetalle: number;

  costo: number;

  duracion: number;

  cupos: number;

  horaInicial: number;

  horaFinal: number;

  paradas: Array<Ciudad>;

  peajes: Array<Peaje>;
}
