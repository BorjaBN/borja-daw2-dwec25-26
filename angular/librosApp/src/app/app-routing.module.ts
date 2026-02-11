import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAlfabeticoComponent } from './libros/pages/listado-alfabetico/listado-alfabetico.component';
import { ListadoTiposComponent } from './libros/pages/listado-tipos/listado-tipos.component';
import { GraficaEditorialesComponent } from './libros/pages/grafica-editoriales/grafica-editoriales.component';
import { EditarComponent } from './libros/pages/editar/editar.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { VerComponent } from './libros/pages/ver/ver.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AutenticacionInterceptorGuard } from './auth/guards/autenticacion-interceptor.guard';

const routes: Routes = [
      {
        // Libros
        path: 'login',
        component: LoginComponent
      }, 
           
     {
        // Libros
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      
      {
        // Libros
        path: 'libros',
        component: DashboardComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        // libros/crear
        path: 'libros/crear',
        component: EditarComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },       
      {
        // libros/editar
        path: 'libros/editar/:id',
        component: EditarComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        // clibros/ver
        path: 'libros/ver/:id',
        component: VerComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        path: 'libros/listado-alfabetico',
        component: ListadoAlfabeticoComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        path: 'libros/listado-tipos',
        component: ListadoTiposComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        path: 'libros/grafica',
        component: GraficaEditorialesComponent,
        canActivate: [AutenticacionInterceptorGuard]
      },
      {
        // libros/ver
        path: '**',
        redirectTo: 'login'
      }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
