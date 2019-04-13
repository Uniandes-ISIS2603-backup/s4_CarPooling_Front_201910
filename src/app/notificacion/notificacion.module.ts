import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionListarComponent } from './notificacion-listar/notificacion-listar.component';
import { NotificacionCrearComponent } from './notificacion-crear/notificacion-crear.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificacionListarComponent, NotificacionCrearComponent]
})
export class NotificacionModule { }
