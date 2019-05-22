import { Trayecto } from "./trayecto";
import { Usuario } from "../usuario/usuario";
import { Pago } from "../pago/pago";

export class TrayectoDetail extends Trayecto {
  /**
   * Los pasajeros del trayecto
   */
  pasajeros: Usuario[];

  /**
   * Los pagos del trayecto
   */
  pagos: Pago[];
}
