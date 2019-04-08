import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { FormsModule } from '@angular/forms';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UsuarioDetailComponent, UsuarioCreateComponent, UsuarioListaComponent, UsuarioEditComponent],
  exports: [UsuarioDetailComponent, UsuarioCreateComponent,UsuarioListaComponent, UsuarioEditComponent ]
})
export class UsuarioModule { }
