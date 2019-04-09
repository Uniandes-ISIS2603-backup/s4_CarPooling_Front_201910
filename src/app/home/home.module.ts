import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BotonesComponent } from './botones/botones.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  declarations: [HomeComponent, BotonesComponent],
  exports: [HomeComponent,BotonesComponent]
})
export class HomeModule { }
