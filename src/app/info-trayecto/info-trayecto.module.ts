import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInfoTrayectoComponent } from './listar-info-trayecto/listar-info-trayecto.component';
import { CrearInfoTrayectoComponent } from './crear-info-trayecto/crear-info-trayecto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarInfoTrayectoComponent, CrearInfoTrayectoComponent], 
  exports: [ListarInfoTrayectoComponent, CrearInfoTrayectoComponent]
})
export class InfoTrayectoModule { }
