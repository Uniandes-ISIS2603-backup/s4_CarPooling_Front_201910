import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ListarCalificacionComponent } from './listar-calificacion/listar-calificacion.component';
import { CrearCalificacionComponent } from './crear-calificacion/crear-calificacion.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalificacionService } from './calificacion.service';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule,FormsModule,BrowserModule,HttpClientModule,NgxPermissionsModule,NgbModule, NgModule
  ],
  declarations: [ListarCalificacionComponent, CrearCalificacionComponent],
  providers:[CalificacionService],
  exports: [ListarCalificacionComponent]
})
export class CalificacionModule { }
