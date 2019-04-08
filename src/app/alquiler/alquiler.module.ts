import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from '../app-routing/app-routing.module';

import { FormsModule } from '@angular/forms';
import {ListarAlquilerComponent} from './listar-alquiler/listar-alquiler.component'
import {AlquilerServiceService} from './alquiler-service.service'
@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ],
  declarations: [ListarAlquilerComponent],
  providers:[AlquilerServiceService],
  exports: [ListarAlquilerComponent]
})
export class AlquilerModule { }
