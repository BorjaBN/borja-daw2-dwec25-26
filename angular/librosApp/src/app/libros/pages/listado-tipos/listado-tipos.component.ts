import { Component, OnInit } from '@angular/core';
import { Libro } from '../../interfaces/libro.interface';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-listado-tipos',
  templateUrl: './listado-tipos.component.html'
})
export class ListadoTiposComponent implements OnInit {

  libros: Libro[] = [];
  librosFiltrados: Libro[] = [];

  paginaActual = 1;
  registrosPorPagina = 10;

  camposDisponibles = [
    { key: 'titulo', label: 'Título', seleccionado: true },
    { key: 'autor', label: 'Autor', seleccionado: true },
    { key: 'editorial', label: 'Editorial', seleccionado: true },
    { key: 'anho_publicacion', label: 'Año', seleccionado: true },
    { key: 'num_edicion', label: 'Edición', seleccionado: true }
  ];

  columnasVisibles = [...this.camposDisponibles];

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.librosService.get().subscribe(libros => {
      this.libros = libros;
      this.librosFiltrados = libros;
    });
  }

  actualizarColumnas(): void {
    this.columnasVisibles = this.camposDisponibles.filter(c => c.seleccionado);
  }

  get librosPaginados(): Libro[] {
    const inicio = (this.paginaActual - 1) * this.registrosPorPagina;
    return this.librosFiltrados.slice(inicio, inicio + this.registrosPorPagina);
  }

  paginaSiguiente(): void {
    this.paginaActual++;
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }
}

