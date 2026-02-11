import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { ListadoComponent } from './libros/pages/listado/listado.component';
import { EditarComponent } from './libros/pages/editar/editar.component';
import { VerComponent } from './libros/pages/ver/ver.component';
// import { ContadorComponent } from './ejemplos/components/contador/contador.component';
import { MenuComponent } from './menu/components/menu/menu.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { TablaLibrosComponent } from './libros/components/tabla-libros/tabla-libros.component';
import { BuscadorComponent } from './shared/components/buscador/buscador.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AutenticacionInterceptorService } from './auth/services/autenticacion-interceptor.service';
import { ListadoAlfabeticoComponent } from './libros/pages/listado-alfabetico/listado-alfabetico.component';
import { ListadoTiposComponent } from './libros/pages/listado-tipos/listado-tipos.component';
import { GraficaEditorialesComponent } from './libros/pages/grafica-editoriales/grafica-editoriales.component';

@NgModule({
  declarations: [
    AppComponent,
    //ListadoComponent,
    EditarComponent,
    VerComponent,
    // ContadorComponent,
    MenuComponent,
    DashboardComponent,
    TablaLibrosComponent,
    BuscadorComponent,
    LoginComponent,
    ListadoAlfabeticoComponent,
    ListadoTiposComponent,
    GraficaEditorialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    // Para los formularios reactivos
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacionInterceptorService,
      multi: true
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

