import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPeajeComponent } from './listar-peaje/listar-peaje.component';
import { CrearPeajeComponent } from './crear-peaje/crear-peaje.component';
import { EditarPeajeComponent } from './editar-peaje/editar-peaje.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarPeajeComponent, CrearPeajeComponent, EditarPeajeComponent]
})
export class PeajeModule { }
