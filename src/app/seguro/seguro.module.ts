import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeguroComponent } from './listar-seguro/listar-seguro.component';
import { CrearSeguroComponent } from './crear-seguro/crear-seguro.component';
import { EditarSeguroComponent } from './editar-seguro/editar-seguro.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { SeguroServiceService } from './seguro-service.service';
import { AdminSeguroComponent } from './admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ListarSeguroComponent, CrearSeguroComponent, EditarSeguroComponent, AdminSeguroComponent],
  providers:[SeguroServiceService],
  exports: [ListarSeguroComponent,CrearSeguroComponent,EditarSeguroComponent,AdminSeguroComponent]
})
export class SeguroModule { }
