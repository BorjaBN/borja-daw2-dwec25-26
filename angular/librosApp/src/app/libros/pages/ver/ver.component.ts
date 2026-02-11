import { Component, OnInit } from '@angular/core';
import { Libro } from '../../interfaces/libro.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit {

  libro!: Libro;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private librosService: LibrosService,
    private dialogService: DialogService
  ) {}
    
  ngOnInit(): void {
    // Identificador de libro
    const idLibro = this.activatedRoute.snapshot.params['id'];

    // Carga el libro
    this.cargarLibro(idLibro);  
  }

  /**
   * Carga el libro con el ID indicado
   */
  cargarLibro(idLibro: number): void {
    this.librosService.getById(idLibro).subscribe({
      next: (libro: Libro) => {
        this.libro = libro;
        console.log(libro);
      },
      complete: () => {},
      error: (error: any) => {
        this.dialogService.mostrarMensaje('No ha sido posible cargar el libro: ' + error, 'ERROR');
        console.log(error);
      }
    });
  }
}