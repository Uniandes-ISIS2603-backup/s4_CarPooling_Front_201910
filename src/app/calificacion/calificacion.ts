import { Usuario } from "../usuario/usuario";
import { Trayecto } from "../trayecto/trayecto";

export class Calificacion {

    id:number;
    puntaje:number;
    comentario:string;
    calificado:Usuario;
    calificador:Usuario;
    trayecto:Trayecto;



}