import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  declarations: [MainScreenComponent], 
  exports: [MainScreenComponent]
})
export class TrayectoLayoutModule { }
