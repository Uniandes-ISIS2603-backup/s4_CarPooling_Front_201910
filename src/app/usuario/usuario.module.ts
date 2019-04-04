import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UsuarioDetailComponent, UsuarioCreateComponent],
  exports: [UsuarioDetailComponent, UsuarioCreateComponent]
})
export class UsuarioModule { }
