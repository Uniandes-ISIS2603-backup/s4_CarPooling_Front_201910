import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ListarTrayectoComponent} from './listar-trayecto/listar-trayecto.component';
import { TrayectoCrearComponent} from './trayecto-crear/trayecto-crear.component';
import { TrayectoDetailComponent} from './trayecto-detail/trayecto-detail.component';
import { TrayectoEditComponent} from './trayecto-edit/trayecto-edit.component';
import { TrayectosComponent } from './trayectos/trayectos.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TrayectoFuturoComponent } from './trayecto-futuro/trayecto-futuro.component';
import { TrayectosFuturosComponent } from './trayectos-futuros/trayectos-futuros.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [ListarTrayectoComponent, TrayectoDetailComponent, TrayectoEditComponent, TrayectosComponent, MenuComponent, TrayectoFuturoComponent, TrayectosFuturosComponent],
  exports: [ListarTrayectoComponent, TrayectoDetailComponent, TrayectoEditComponent, TrayectosComponent]
})
export class TrayectoModule { }
