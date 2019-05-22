import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { FormsModule } from '@angular/forms';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { UsuarioInfoComponent } from './usuario-info/usuario-info.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioVehiculosComponent } from './usuario-vehiculos/usuario-vehiculos.component';
import { UsuarioCalificacionesComponent } from './usuario-calificaciones/usuario-calificaciones.component';
import { UsuarioNotificacionesComponent } from './usuario-notificaciones/usuario-notificaciones.component';
import { UsuarioBuscarComponent } from './usuario-buscar/usuario-buscar.component';
import { UsuarioBuscarListaComponent } from './usuario-buscar-lista/usuario-buscar-lista.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { UsuarioBuscarEspecificoComponent } from './usuario-buscar-especifico/usuario-buscar-especifico.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [UsuarioDetailComponent, UsuarioCreateComponent, UsuarioListaComponent, UsuarioEditComponent, MenuComponent, UsuarioInfoComponent, UsuarioLoginComponent, UsuarioVehiculosComponent, UsuarioCalificacionesComponent, UsuarioNotificacionesComponent, UsuarioBuscarComponent, UsuarioBuscarListaComponent, UsuarioBuscarEspecificoComponent],
  exports: [UsuarioDetailComponent, UsuarioCreateComponent,UsuarioListaComponent, UsuarioEditComponent, MenuComponent,UsuarioInfoComponent,UsuarioLoginComponent, UsuarioVehiculosComponent,  UsuarioCalificacionesComponent, UsuarioNotificacionesComponent, UsuarioBuscarComponent, UsuarioBuscarListaComponent,UsuarioBuscarEspecificoComponent]
})
export class UsuarioModule { }
