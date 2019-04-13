import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInfoTrayectoComponent } from './listar-info-trayecto/listar-info-trayecto.component';
import { CrearInfoTrayectoComponent } from './crear-info-trayecto/crear-info-trayecto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import {EditInfoTrayectoComponent} from './edit-info-trayecto/edit-info-trayecto.component';



@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule,BrowserModule,HttpClientModule,NgxPermissionsModule,NgbModule
  ],
  declarations: [ListarInfoTrayectoComponent, CrearInfoTrayectoComponent, EditInfoTrayectoComponent], 
  exports: [ListarInfoTrayectoComponent, CrearInfoTrayectoComponent, EditInfoTrayectoComponent]
})
export class InfoTrayectoModule { }
