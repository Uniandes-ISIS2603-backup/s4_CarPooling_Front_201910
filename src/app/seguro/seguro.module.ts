import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeguroComponent } from './listar-seguro/listar-seguro.component';
import { CrearSeguroComponent } from './crear-seguro/crear-seguro.component';
import { EditarSeguroComponent } from './editar-seguro/editar-seguro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarSeguroComponent, CrearSeguroComponent, EditarSeguroComponent]
})
export class SeguroModule { }
