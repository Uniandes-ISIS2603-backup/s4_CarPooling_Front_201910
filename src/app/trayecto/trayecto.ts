import { InfoTrayecto } from "../info-trayecto/info-trayecto";
import { Usuario } from "../usuario/usuario";
import { Ciudad } from "../ciudad/ciudad";

export class Trayecto {

	id: number;

	estado: number;

	fechaInicial: Date;
	

	fechaFinal: Date;
    
    conductor: Usuario;

    info: InfoTrayecto;
    
    ciudadOrigen: Ciudad;
    
    ciudad: Ciudad;

}
