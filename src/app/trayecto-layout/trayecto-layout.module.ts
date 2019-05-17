import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TrayectoCrearComponent } from '../trayecto/trayecto-crear/trayecto-crear.component';
import { TrayectosFuturosComponent } from '../trayecto/trayectos-futuros/trayectos-futuros.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  declarations: [MainScreenComponent, TrayectoCrearComponent, TrayectosFuturosComponent], 
  exports: [MainScreenComponent]
})
export class TrayectoLayoutModule { }
