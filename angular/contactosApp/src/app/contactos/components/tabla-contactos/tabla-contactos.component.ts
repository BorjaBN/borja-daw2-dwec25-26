import { Component, Input } from '@angular/core';
import { Contacto } from '../../interfaces/contacto.interface';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-tabla-contactos',
  templateUrl: './tabla-contactos.component.html'
})
export class TablaContactosComponent {

  /**
   * Lista de contactos
   */
  @Input() contactos: Contacto [] = [];

  /**
   * Borra el contacto en la posición "indice"
   * 
   * @param indice Posición del contacto en la tabla
   */
  borrarContacto(indice : number) : void {
    this.dialogService.mostrarDialogoConfirmacion(
      "¿Seguro que quiere eliminar el contacto?",
      "ADVERTENCIA", () => {
        this.
      }
    )
  }

}
