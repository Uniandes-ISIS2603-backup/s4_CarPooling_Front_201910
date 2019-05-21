import { Usuario } from "../usuario/usuario";
import { Trayecto } from "../trayecto/trayecto";

export class Notificacion {

	id:number;
    mensaje:string;

    emisor:Usuario;

    receptor:Usuario;

    trayecto: Trayecto;

    leido: boolean;

    fecha: any;

    tipo: number;

    hasReceptor(): boolean{
        return !(this.receptor!=null);
    }

}

