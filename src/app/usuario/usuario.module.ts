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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [UsuarioDetailComponent, UsuarioCreateComponent, UsuarioListaComponent, UsuarioEditComponent, MenuComponent, UsuarioInfoComponent, UsuarioLoginComponent, UsuarioVehiculosComponent],
  exports: [UsuarioDetailComponent, UsuarioCreateComponent,UsuarioListaComponent, UsuarioEditComponent, MenuComponent,UsuarioInfoComponent,UsuarioLoginComponent, UsuarioVehiculosComponent ]
})
export class UsuarioModule { }
