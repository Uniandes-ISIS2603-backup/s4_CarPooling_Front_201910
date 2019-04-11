import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from '../app-routing/app-routing.module';

import { FormsModule } from '@angular/forms';
import {ListarAlquilerComponent} from './listar-alquiler/listar-alquiler.component'
import {AlquilerServiceService} from './alquiler-service.service';
import { CrearAlquilerComponent } from './crear-alquiler/crear-alquiler.component';
import { EditarAlquilerComponent } from './editar-alquiler/editar-alquiler.component'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule,BrowserModule,HttpClientModule,NgxPermissionsModule,NgbModule
  ],
  declarations: [ListarAlquilerComponent, CrearAlquilerComponent, EditarAlquilerComponent],
  providers:[AlquilerServiceService],
  exports: [ListarAlquilerComponent, CrearAlquilerComponent,EditarAlquilerComponent]
})
export class AlquilerModule { }
