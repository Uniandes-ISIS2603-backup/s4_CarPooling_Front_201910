import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BotonesComponent } from './botones/botones.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,AppRoutingModule,FormsModule,NgbModule
  ],
  declarations: [HomeComponent, BotonesComponent, LoginComponent],
  exports: [HomeComponent,BotonesComponent]
})
export class HomeModule { }
