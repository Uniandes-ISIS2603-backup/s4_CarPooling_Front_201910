import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInfoTrayectoComponent } from './listar-info-trayecto/listar-info-trayecto.component';
import { CrearInfoTrayectoComponent } from './crear-info-trayecto/crear-info-trayecto.component';
import { EditInfoTrayectoComponent } from './edit-info-trayecto/edit-info-trayecto.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListarInfoTrayectoComponent, CrearInfoTrayectoComponent, EditInfoTrayectoComponent], 
  exports: [ListarInfoTrayectoComponent, CrearInfoTrayectoComponent, EditInfoTrayectoComponent]
})
export class InfoTrayectoModule { }
