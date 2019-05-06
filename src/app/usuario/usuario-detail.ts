import {Usuario} from "./usuario";
import {Vehiculo} from "../vehiculo/vehiculo"
import {Alquiler} from "../alquiler/alquiler"
import {Trayecto} from "../trayecto/trayecto"
import { Calificacion } from "../calificacion/calificacion";
import { Notificacion } from "../notificacion/notificacion";

export class UsuarioDetail extends Usuario {

	/**
	* Los vehiculos del usuario
	*/
	vehiculos: Vehiculo[];

	/**
	* Los alquileres del que el usuario es dueño
	*/
	alquilerDuenio: Alquiler;

	/**
	* El alquiler del que el usuario es cliente
	*/
	alquilerArrendatario: Alquiler[];

	/**
	* Trayectos de los que el usuario es condutor
	*/
	trayectoActualConductor: Trayecto[];

	/**
	* Trayectos de los que el usuario es dueño
	*/
	trayectoActualPasajero: Trayecto[];

	/**
	* Las calificaciones del usuario
	*/
	calificaciones: Calificacion[];

	/**
	* Las notificaciones enviadas por el usuario
	*/
	notificacionesEnviadas: Notificacion[];
	
	/**
	* Las notificaciones recibidas por el usuario
	*/
	notificacionesRecibidas: Notificacion[];


}
