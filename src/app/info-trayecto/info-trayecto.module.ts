import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInfoTrayectoComponent } from './listar-info-trayecto/listar-info-trayecto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarInfoTrayectoComponent], 
  exports: [ListarInfoTrayectoComponent]
})
export class InfoTrayectoModule { }
