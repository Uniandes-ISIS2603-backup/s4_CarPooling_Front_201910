import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {PagoModule} from './pago/pago.module';
import {UsuarioModule} from './usuario/usuario.module';
import {TrayectoModule} from './trayecto/trayecto.module';
import {InfoTrayectoModule} from './info-trayecto/info-trayecto.module';
import { AlquilerModule } from './alquiler/alquiler.module';
import{HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module';
import { SeguroModule } from './seguro/seguro.module';
import { PeajeModule } from './peaje/peaje.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { InicioModule } from './inicio/inicio.module';
import { TrayectoLayoutModule } from './trayecto-layout/trayecto-layout.module';
import {MatNativeDateModule, MatCard} from '@angular/material';
import { DemoMaterialModule } from './material-module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef,   
    DocumentRef, MapServiceFactory, 
    BingMapAPILoaderConfig, BingMapAPILoader, 
    GoogleMapAPILoader,  GoogleMapAPILoaderConfig
} from 'angular-maps';



@NgModule({
    declarations: [
        AppComponent
        
    ],
    imports: [
        BrowserModule,
        MapModule.forRootBing(),
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule, 
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,

        /**
         * card
         */
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        DemoMaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,

        /**
        * A partir de ahora, los imports de la clase
        */
        PagoModule,
        UsuarioModule,
        AlquilerModule,
        TrayectoLayoutModule,
        SeguroModule,
        PeajeModule,
        HomeModule,
        AdminModule,
        TrayectoModule,
        InfoTrayectoModule,
        VehiculoModule,
        InicioModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
            
        },
        {
            provide: MapAPILoader, deps: [], useFactory: BingMapServiceProviderFactory 
        }
    ]
})
export class AppModule {}

export function BingMapServiceProviderFactory(){
    let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
    bc.apiKey ="KuKrc8vnerY9djmybqop~cgxJsU2fCPqgUjsgRtuK5Q~AnGmgEdOYbVJ7xo7vhu-UDonYVVC2bAZ6VGAy787HPcVlQOl-cpbJTBjiJfgaEyT"; 
      
    bc.branch = "experimental"; 
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
    return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}


/**
 * nueva caos
 */
platformBrowserDynamic().bootstrapModule(AppModule);
