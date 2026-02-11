import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from '../../interfaces/libro.interface';
import { LibrosService } from '../../services/libros.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-tabla-libros',
  templateUrl: './tabla-libros.component.html'
})


export class TablaLibrosComponent {


  /**
   * Lista de libros
   */
  @Input() libros: Libro[] = [];
  @Output() onBorrarLibro: EventEmitter<number> = new EventEmitter();


  constructor(
    private librosService: LibrosService,
    private dialogService: DialogService  // Servicio de diálogos
  ) { }
  


  /**
   * Borra el libro en la posición "indice"
   * 
   * @param indice Posición del libro en la tabla
   */
  borrarLibro(indice: number): void {

    const libro = this.libros[indice];
    
    if (!libro.id) return;

    this.dialogService.solicitarConfirmacion(
      `¿Seguro que quiere eliminar el libro "${libro.titulo}"?`,
      "ADVERTENCIA",
      () => {

        // Llamada al servicio para eliminar del servidor
        this.librosService.delete(libro.id!).subscribe({

          next: () => {
            // Emitir evento para que el padre actualice la lista
            this.onBorrarLibro.emit(libro.id);
          },
          error: (error) => {

            console.error('Error al eliminar libro:', error);

            this.dialogService.mostrarMensaje('No se pudo eliminar el libro', 'ERROR');
          }
        });
      }
    );
  }

}
