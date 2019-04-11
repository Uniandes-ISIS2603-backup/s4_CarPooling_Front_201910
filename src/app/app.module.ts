import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
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
import { AlquilerModule } from './alquiler/alquiler.module';
import{HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module';
import { TrayectosComponent } from './trayectos/trayectos.component';
import { ListarTrayectoComponent } from './trayecto/listar-trayecto/listar-trayecto.component';
import { CrearClienteComponent } from './trayecto/crear-cliente/crear-cliente.component';

@NgModule({
    declarations: [
        AppComponent,
        TrayectosComponent,
        ListarTrayectoComponent,
        CrearClienteComponent
    ],
    imports: [
        BrowserModule,
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
        * A partir de ahora, los imports de la clase
        */
        PagoModule,
        UsuarioModule,
        AlquilerModule,
        HomeModule,
        AdminModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
