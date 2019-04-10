import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from '../app-routing/app-routing.module';

import { FormsModule } from '@angular/forms';
import {ListarAlquilerComponent} from './listar-alquiler/listar-alquiler.component'
import {AlquilerServiceService} from './alquiler-service.service';
import { CrearAlquilerComponent } from './crear-alquiler/crear-alquiler.component';
import { EditarAlquilerComponent } from './editar-alquiler/editar-alquiler.component'
@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ],
  declarations: [ListarAlquilerComponent, CrearAlquilerComponent, EditarAlquilerComponent],
  providers:[AlquilerServiceService],
  exports: [ListarAlquilerComponent, CrearAlquilerComponent,EditarAlquilerComponent]
})
export class AlquilerModule { }
