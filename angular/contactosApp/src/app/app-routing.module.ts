import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './contactos/pages/listado/listado.component';
import { EditarComponent } from './contactos/pages/editar/editar.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { VerComponent } from './contactos/pages/ver/ver.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AutenticacionInterceptorGuard } from './auth/guards/autenticacion-interceptor.guard';

const routes: Routes = [
      {
        // contactos
        path: 'login',
        component: LoginComponent
      },      
     {
        // contactos
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        // contactos
        path: 'contactos',
        component: ListadoComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        // contactos/crear
        path: 'contactos/crear',
        component: EditarComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },      
      {
        // contactos/editar
        path: 'contactos/editar/:id',
        component: EditarComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        // contactos/ver
        path: 'contactos/ver/:id',
        component: VerComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        // contactos/ver
        path: '**',
        redirectTo: 'login'
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
