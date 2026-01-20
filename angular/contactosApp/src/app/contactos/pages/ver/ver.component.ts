import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../interfaces/contacto.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactosService } from '../../services/contactos.service';
import { DialogComponent } from '../../../shared/services/dialog/dialog.component';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit {

  contacto! : Contacto;

  constructor(
    
    // Ruta que ha sido activada para llegar aquí
    private activatedRoute    : ActivatedRoute,

    // Router
    private router            : Router,

    // Servicio de contactos
    private contactosService  : ContactosService,

    private dialogService      : DialogComponent

  ) {}
    
  ngOnInit(): void {

    // Identificador de contacto
    const idContacto = this.activatedRoute.snapshot.params['id'];

    // Carga el contacto
    this.cargarContacto(idContacto);  
  }

  //-------------------------------------------------------------------------------------
  // Funciones de persistencia. Permiten guardar y recuperar contactos
  //-------------------------------------------------------------------------------------
  /**
   * Cuando estamos editando, este método carga la receta que estamos editando en el formulario
   */
  cargarContacto(idContacto: number) : void {
  
    this.contactosService.getById(idContacto).subscribe(
      {      
    
        // Reciebe el siguiente valor
        next: (contacto: Contacto) =>  {        
          
          // Asigna el contacto recibido como argumento
          this.contacto = contacto;
        
          // Muestra el contacto en el log
          console.log(contacto);
        },

        // El observer ha recibido una notificación completa
        complete: () => {     
        },

        // El observer ha recibido un error
        error: (error : any) => {
          
          this.dialogService.mostrarMensaje('No ha sido posible cargar el contacto: '+error, 'ERROR');
          console.log(error);
        }
    });
  }
}
