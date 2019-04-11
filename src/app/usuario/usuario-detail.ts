import {Usuario} from "./usuario";
import {Vehiculo} from "../vehiculo/vehiculo"
import {Alquiler} from "../alquiler/alquiler"

export class UsuarioDetail extends Usuario {

	//trayectoActualConductor: Trayecto][];

	vehiculos: Vehiculo[];

	alquilerDueño: Alquiler[];

	alquilerArrendatario: Alquiler;


}
