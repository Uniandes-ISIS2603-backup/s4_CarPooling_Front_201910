import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from '../app-routing/app-routing.module';

import { FormsModule } from '@angular/forms';
import {VehiculoListComponent} from './vehiculo-list/vehiculo-list.component'
import {VehiculoService} from './vehiculo.service';
import { VehiculoCreateComponent } from './vehiculo-create/vehiculo-create.component';
import { VehiculoEditComponent } from './vehiculo-edit/vehiculo-edit.component'
@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ],
  declarations: [VehiculoListComponent, VehiculoCreateComponent, VehiculoEditComponent],
  providers:[VehiculoService],
  exports: [VehiculoListComponent, VehiculoCreateComponent,VehiculoEditComponent]
})
export class VehiculoModule { }
