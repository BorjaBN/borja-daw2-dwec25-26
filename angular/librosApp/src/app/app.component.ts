import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from './auth/services/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librosApp';

  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) { }

  /**
   * Determina si se debe mostrar el menú
   */
  mostrarMenu(): boolean {
    return this.router.url !== '/login';
  }

  /**
   * Cierra la sesión y redirige al login
   */
  cerrarSesion(): void {
    this.autenticacionService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}