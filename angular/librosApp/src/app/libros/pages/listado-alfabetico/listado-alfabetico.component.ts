import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../../interfaces/libro.interface';

@Component({
  selector: 'app-listado-alfabetico',
  templateUrl: './listado-alfabetico.component.html'
})
export class ListadoAlfabeticoComponent implements OnInit {

  libros: Libro[] = [];
  librosFiltrados: Libro[] = [];

  paginaActual = 1;
  registrosPorPagina = 10;

  alfabeto: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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

  filtrarPorLetra(letra: string): void {
    this.paginaActual = 1;
    this.librosFiltrados = this.libros.filter(libro =>
      libro.titulo.toUpperCase().startsWith(letra)
    );
  }

  mostrarTodos(): void {
    this.paginaActual = 1;
    this.librosFiltrados = this.libros;
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

  onBorrarLibro(idLibro: number): void {
    this.libros = this.libros.filter(l => l.id !== idLibro);
    this.librosFiltrados = this.librosFiltrados.filter(l => l.id !== idLibro);
  }
}
