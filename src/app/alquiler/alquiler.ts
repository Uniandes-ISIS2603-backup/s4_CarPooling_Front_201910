import { Usuario } from "../usuario/usuario";
import { Seguro } from "../seguro/seguro";

export class Alquiler {
    id:number;
    nombre:string;
    duenio:Usuario;
    seguro:Seguro;
    arrendatario:Usuario;
}
