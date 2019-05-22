import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { UsuarioCreateComponent} from '../usuario/usuario-create/usuario-create.component'
import { UsuarioDetailComponent } from '../usuario/usuario-detail/usuario-detail.component';
import { UsuarioEditComponent} from '../usuario/usuario-edit/usuario-edit.component'
import { UsuarioListaComponent} from '../usuario/usuario-lista/usuario-lista.component'
import { UsuarioInfoComponent} from '../usuario/usuario-info/usuario-info.component'
import { UsuarioVehiculosComponent} from '../usuario/usuario-vehiculos/usuario-vehiculos.component'


import { PagoCreateComponent} from '../pago/pago-create/pago-create.component'
import { InfoComponent } from '../pago/info/info.component';
import { PagoEditComponent} from '../pago/pago-edit/pago-edit.component'
import { PagoListComponent} from '../pago/pago-list/pago-list.component'
import { VehiculoCreateComponent } from '../vehiculo/vehiculo-create/vehiculo-create.component';
import { VehiculoListComponent } from '../vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoEditComponent } from '../vehiculo/vehiculo-edit/vehiculo-edit.component';
import { ListarAlquilerComponent } from '../alquiler/listar-alquiler/listar-alquiler.component';
import { MenuComponent} from '../usuario/menu/menu.component';
import { HomeComponent} from '../home/home/home.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from '../home/login/login.component';


import { TrayectoCrearComponent} from '../trayecto/trayecto-crear/trayecto-crear.component';
import { TrayectoDetailComponent } from '../trayecto/trayecto-detail/trayecto-detail.component';
import { TrayectoEditComponent} from '../trayecto/trayecto-edit/trayecto-edit.component';
import { ListarTrayectoComponent} from '../trayecto/listar-trayecto/listar-trayecto.component';
import { ListarInfoTrayectoComponent} from '../info-trayecto/listar-info-trayecto/listar-info-trayecto.component';
import { EditInfoTrayectoComponent} from '../info-trayecto/edit-info-trayecto/edit-info-trayecto.component';
import { EditarAlquilerComponent } from '../alquiler/editar-alquiler/editar-alquiler.component';
import { CrearAlquilerComponent } from '../alquiler/crear-alquiler/crear-alquiler.component';
import { EditarSeguroComponent } from '../seguro/editar-seguro/editar-seguro.component';
import { ListarSeguroComponent } from '../seguro/listar-seguro/listar-seguro.component';
import { CrearSeguroComponent } from '../seguro/crear-seguro/crear-seguro.component';
import { EditarPeajeComponent } from '../peaje/editar-peaje/editar-peaje.component';
import { ListarPeajeComponent } from '../peaje/listar-peaje/listar-peaje.component';
import { CrearPeajeComponent } from '../peaje/crear-peaje/crear-peaje.component';
import { AdminSeguroComponent } from '../seguro/admin/admin.component';
import { AdminPeajeComponent } from '../peaje/admin/admin.component';
import { UsuarioLoginComponent } from '../usuario/usuario-login/usuario-login.component';
import { InicioComponent } from '../inicio/inicio/inicio.component';
import { UsuarioCalificacionesComponent } from '../usuario/usuario-calificaciones/usuario-calificaciones.component';
import { UsuarioNotificacionesComponent } from '../usuario/usuario-notificaciones/usuario-notificaciones.component';
import { UsuarioBuscarComponent } from '../usuario/usuario-buscar/usuario-buscar.component';
import { MainScreenComponent } from '../trayecto-layout/main-screen/main-screen.component';
import { UsuarioBuscarListaComponent } from '../usuario/usuario-buscar-lista/usuario-buscar-lista.component';
import { MisTrayectosComponent } from '../trayecto/mis-trayectos/mis-trayectos.component';
import { TrayectoDetailCalificarComponent } from '../trayecto/trayecto-detail-calificar/trayecto-detail-calificar.component';



const routes: Routes = [

    {
        // Path de login y sign up
       path: 'inicio',
       component: InicioComponent
     },
     {
         // Path de login y sign up
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    //path de la pestaña de Trayectos
    {
        
       path: 'pestaña-trayecto',
       component: MainScreenComponent
     },


    // Path de los otros modulos
        {
        path: 'pago',
        children: [         
            {path: 'create',
            component:  PagoCreateComponent},
            {path: 'info',
            component:  InfoComponent},
            {path: 'edit',
            component:  PagoEditComponent},
            {
                path: 'list',
                component:  PagoListComponent            }
        
        ]
    },
    {
        path: 'usuario',
        children: [         
            {
                path: 'create',
                component:  UsuarioCreateComponent
            },
            {
                path: 'login',
                component:  UsuarioLoginComponent
            },
            {
                path: 'menu',
                component:  MenuComponent,
                children :
                [   
                    {  
                        path: 'info',
                        component: UsuarioInfoComponent,
                        outlet: 'content'
                    },
                    {
                        path: 'edit',
                        component:  UsuarioEditComponent,
                        outlet: 'content'
                    },
                    {
                        path: 'vehiculos',
                        component:  UsuarioVehiculosComponent,
                        outlet: 'content'
                    },
                    {
                        path: 'calificaciones',
                        component:  UsuarioCalificacionesComponent,
                        outlet: 'content'
                    },
                    {
                        path: 'notificaciones',
                        component:  UsuarioNotificacionesComponent,
                        outlet: 'content'
                    },
                    {
                        path: 'buscarUsuario',
                        component:  UsuarioBuscarComponent,
                        outlet: 'content'
                    },
                    {
                        path: 'buscarUsuarioLista',
                        component:  UsuarioBuscarListaComponent,
                        outlet: 'content'
                    },
                    {
                        path: '**',
                        redirectTo: 'info'
                    }

                ]
            },
            {
                path: 'lista',
                component:  UsuarioListaComponent,
            },
            {
                path: ':username',
                component: UsuarioDetailComponent
            }

        
        ]
    },
        {path: 'alquiler',
        children:[
            {path:'edit',
            component: EditarAlquilerComponent},
            {path:'listar',
            component: ListarAlquilerComponent},
            {path: 'crear',
            component: CrearAlquilerComponent}
        ]},
        {path: 'seguro',
        children:[
            {path:'edit',
            component: EditarSeguroComponent},
            {path:'listar',
            component: ListarSeguroComponent},
            {path: 'crear',
            component: CrearSeguroComponent},
            {path:'admin',
            component: AdminSeguroComponent}
        ]},
        {path: 'peaje',
        children:[ 
            {path:'edit',
            component: EditarPeajeComponent},
            {path:'listar',
            component: ListarPeajeComponent},
            {path: 'crear',
            component: CrearPeajeComponent},
            {path:'admin',
            component: AdminPeajeComponent}]},
        
        {path: 'login',
        component: LoginComponent},
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'trayecto',
        children: [         
            {path: 'create',
            component:  TrayectoCrearComponent},
            
            {path: 'edit',
            component:  TrayectoEditComponent},
            {path: 'list',
                component:  ListarTrayectoComponent            
            },
            {path: 'mis-trayectos',
                component:  MisTrayectosComponent            
            },
            {path: 'trayecto-detail-calificar',
                component:  TrayectoDetailCalificarComponent            
            },
            
            {path: 'detail',
            component:  TrayectoDetailComponent            
        }
        
        ]
    },
    {
        path: 'infoTrayecto',
        children: 
        [         
            {
                path: 'list',
                component:  ListarInfoTrayectoComponent            
            },
            {path: 'edit',
            component:  EditInfoTrayectoComponent
            }
        ]
    },
    {
        path: 'vehiculo',
        children: 
        [
            {
                path: 'create',
                component: VehiculoCreateComponent
            }            
        ]
    },
    {
        path: "**",
        redirectTo: 'home'

    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
