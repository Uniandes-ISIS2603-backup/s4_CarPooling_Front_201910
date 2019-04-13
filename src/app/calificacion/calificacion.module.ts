import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ListarCalificacionComponent } from './listar-calificacion/listar-calificacion.component';
import { CrearCalificacionComponent } from './crear-calificacion/crear-calificacion.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [ListarCalificacionComponent, CrearCalificacionComponent]
})
export class CalificacionModule { }
