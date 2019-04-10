import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { PagoCreateComponent } from './pago-create/pago-create.component';
import { FormsModule } from '@angular/forms';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagoEditComponent } from './pago-edit/pago-edit.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [InfoComponent, PagoCreateComponent, PagoListComponent, PagoEditComponent],
  exports: [InfoComponent, PagoCreateComponent, PagoListComponent, PagoEditComponent]
})
export class PagoModule { }
