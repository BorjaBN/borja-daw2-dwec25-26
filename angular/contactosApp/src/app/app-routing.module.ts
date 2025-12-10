import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './contactos/pages/listado/listado.component';
import { EditarComponent } from './contactos/pages/editar/editar.component';

const routes: Routes = [  {
        // tareas/listado
        path: 'contactos',
        component: ListadoComponent
      },
      {
        // tareas/agregar
        path: 'contactos/editar',
        component: EditarComponent
      },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
