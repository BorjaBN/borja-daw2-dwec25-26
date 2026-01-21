import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListadoComponent } from './contactos/pages/listado/listado.component';
import { EditarComponent } from './contactos/pages/editar/editar.component';
import { VerComponent } from './contactos/pages/ver/ver.component';
import { ContadorComponent } from './ejemplos/components/contador/contador.component';
import { MenuComponent } from './menu/components/menu/menu.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { TablaContactosComponent } from './contactos/components/tabla-contactos/tabla-contactos.component';
import { BuscadorComponent } from './shared/components/buscador/buscador.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AutenticacionInterceptorService } from './auth/services/autenticacion-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    EditarComponent,
    VerComponent,
    ContadorComponent,
    MenuComponent,
    DashboardComponent,
    TablaContactosComponent,
    BuscadorComponent,
    LoginComponent
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
