import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './contactos/pages/listado/listado.component';
import { EditarComponent } from './contactos/pages/editar/editar.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { VerComponent } from './contactos/pages/ver/ver.component';

const routes: Routes = [
      {
        // contactos
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        // contactos
        path: 'contactos',
        component: ListadoComponent
      },
      {
        // contactos/crear
        path: 'contactos/crear',
        component: EditarComponent
      },      
      {
        // contactos/editar
        path: 'contactos/editar/:id',
        component: EditarComponent
      },
      {
        // contactos/ver
        path: 'contactos/ver/:id',
        component: VerComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
