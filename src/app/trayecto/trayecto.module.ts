import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { UsuarioService } from '../usuario/usuario.service';
import { MisTrayectosComponent } from './mis-trayectos/mis-trayectos.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { TrayectoBuscarEspecificoComponent } from './trayecto-buscar-especifico/trayecto-buscar-especifico.component';
import { TrayectoDetailCalificarComponent } from './trayecto-detail-calificar/trayecto-detail-calificar.component';
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef,   
  DocumentRef, MapServiceFactory, 
  BingMapAPILoaderConfig, BingMapAPILoader, 
  GoogleMapAPILoader,  GoogleMapAPILoaderConfig
} from 'angular-maps';
import { TrayectoCreateComponent } from './trayecto-create/trayecto-create.component';

@NgModule({
  imports: [
    CommonModule,
    MapModule.forRootBing(),
    FormsModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [ListarTrayectoComponent, TrayectoDetailComponent, TrayectoEditComponent, TrayectosComponent, MenuComponent, TrayectoFuturoComponent, MisTrayectosComponent, TrayectoDetailCalificarComponent, TrayectoBuscarEspecificoComponent, TrayectoCreateComponent],
  exports: [ListarTrayectoComponent, TrayectoDetailComponent, TrayectoEditComponent, TrayectosComponent, MenuComponent, TrayectoFuturoComponent, MisTrayectosComponent, TrayectoBuscarEspecificoComponent]

})
export class TrayectoModule { }
