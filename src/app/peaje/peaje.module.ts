import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPeajeComponent } from './listar-peaje/listar-peaje.component';
import { CrearPeajeComponent } from './crear-peaje/crear-peaje.component';
import { EditarPeajeComponent } from './editar-peaje/editar-peaje.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PeajeServiceService } from './peaje-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPeajeComponent } from './admin/admin.component';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule,BrowserModule,HttpClientModule,NgxPermissionsModule,NgbModule
  ],
  declarations: [ListarPeajeComponent, CrearPeajeComponent, EditarPeajeComponent, AdminPeajeComponent],
  providers:[PeajeServiceService],
  exports: [ListarPeajeComponent,CrearPeajeComponent,EditarPeajeComponent,AdminPeajeComponent]
})
export class PeajeModule { }
