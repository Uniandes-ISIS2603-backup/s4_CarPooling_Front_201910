import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {ListarTrayectoComponent} from './listar-trayecto/listar-trayecto.component';
import {TrayectoCrearComponent} from './trayecto-crear/trayecto-crear.component';
import {TrayectoDetailComponent} from './trayecto-detail/trayecto-detail.component';
import {TrayectoEditComponent} from './trayecto-edit/trayecto-edit.component';
import {TrayectosComponent} from './trayectos/trayectos.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [ListarTrayectoComponent, TrayectoCrearComponent, TrayectoDetailComponent, TrayectoEditComponent, TrayectosComponent, MenuComponent],
  exports: [ListarTrayectoComponent, TrayectoCrearComponent, TrayectoDetailComponent, TrayectoEditComponent, TrayectosComponent]
})
export class TrayectoModule { }
