import { Usuario } from "../usuario/usuario";
import { Trayecto } from "../trayecto/trayecto";
import { hasOwnProperty } from "assert";
import { TrayectoDetail } from "../trayecto/trayecto-detail";

export class Notificacion {
  id: number;

  mensaje: string;

  emisor: Usuario;

  receptor: Usuario;

  trayecto: TrayectoDetail;

  leido: boolean;

  fecha: any;

  tipo: number;

  hasReceptor(): boolean {
    return hasOwnProperty("receptor");
  }
}
