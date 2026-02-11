import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../libros/services/libros.service';
import { Libro } from '../../../libros/interfaces/libro.interface';
import { DialogService } from '../../../shared/services/dialog.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  libros: Libro[] = [];
  ordenActual: 'asc' | 'desc' = 'asc';
  paginaActual: number = 1;
  registrosPorPagina: number = 6;

  constructor(
    private librosService: LibrosService,
    private dialogService: DialogService,
    private router: Router
  ) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: any) => {
          if (event.urlAfterRedirects.startsWith('/libros')) {
            this.cargarLibros('', 'titulo', this.ordenActual);
          }
        });
    }


  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(
    filtro: string = '',
    ordenarPor: string = '',
    orden: 'asc' | 'desc' = 'asc'
  ): void {
    this.librosService.get(filtro, ordenarPor, orden).subscribe(
      libros => {
        this.libros = libros;
      }
    );
  }

  get librosPaginados() {
    const inicio = (this.paginaActual - 1) * this.registrosPorPagina;
    return this.libros.slice(inicio, inicio + this.registrosPorPagina);
  }
  


  onBusquedaEjecutada(termino: string): void {
    this.paginaActual = 1;
    this.cargarLibros(termino);
  }

  onBorrarLibro(idLibro: number): void {
    this.libros = this.libros.filter(libro => libro.id !== idLibro);
    this.dialogService.mostrarToast("Libro eliminado correctamente");
  }

  ordenarTituloAsc(): void {
    this.ordenActual = 'asc';
    this.cargarLibros('', 'titulo', 'asc');
  }

  ordenarTituloDesc(): void {
    this.ordenActual = 'desc';
    this.cargarLibros('', 'titulo', 'desc');
  }


  paginaSiguiente(): void {
    this.paginaActual++;
    this.cargarLibros('', 'titulo', this.ordenActual);
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarLibros('', 'titulo', this.ordenActual);
    }
  }

}