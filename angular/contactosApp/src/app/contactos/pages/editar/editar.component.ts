import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from '../../../shared/services/dialog/dialog.component';
import { ValidacionService } from '../../../shared/services/validacion.service';
import { ContactosService } from '../../services/contactos.service';
import { Contacto } from '../../interfaces/contacto.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent {
  // Defino el formulario
  // En esta definición incluyo
  // - Nombres de los campos. Deben coincidir con los del objeto
  // - Opciones de los campos
  // - Validaciones locales
  // - Validaciones asíncronas
  formulario!: FormGroup;

  //-------------------------------------------------------------------------------------
  // Inicialización
  //-------------------------------------------------------------------------------------

  constructor(

    private fb                 : FormBuilder,
    private validacionService  : ValidacionService,
    private dialogService      : DialogComponent,
    private contactosService   : ContactosService,
    private router             : Router,
    private activatedRoute     : ActivatedRoute

  ) { 
    
    this.formulario = this.fb.group({
      id          : [-1],
      nombre: ['', [ Validators.required, validacionService.validarEmpiezaMayuscula, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(3)]],
      empresa: ['', [Validators.required, Validators.minLength(3)]]
    }, {  

      // 008 Este segundo argumento que puedo enviar al formgroup permite por ejemplo ejecutar
      // validadores sincronos y asíncronos. Son validaciones al formgroup
      validators: [ this.validacionService.camposNoIguales('nombre', 'apellidos') ]

    });

  }

  /**
   * Inicialización de la página
   */
  ngOnInit(): void {

      // Si está en modo edición, carga el contacto
      const idContacto = this.activatedRoute.snapshot.params['id'];
      console.log('ID Contacto: ', idContacto);

      // Si hay id de contacto en la ruta, estamos en modo edición
      if(idContacto) {
        this.cargarContacto(idContacto);
      }
  }

  guardar() {
    // Si el formulario no es válido, muestra un mensaje de error y termina
    if(this.formulario.invalid) {
      
      // Marco los campos como tocados. De ese modo se mostrarán todos los errores
      // registrados en los campos
      this.formulario.markAllAsTouched();

      // Muestro mensaje de error
      this.dialogService.mostrarMensaje('Por favor, revise los datos');

      // Finaliza
      return;
    }

    // Si id_tarea es > 0 significa que la tarea ya existía. Es actualización
    if(this.formulario.get('id')?.value > 0) {

      // Actualiza la contacto
      this.actualizarContacto();

    } else {

      // Crea el contacto
      this.crearContacto();
    }
  }

  esCampoNoValido( nombreCampo: string ) : boolean {
    return this.formulario.controls[nombreCampo].errors != null;
  }

  mensajeErrorCampo( nombreCampo: string ) : string {
    const errores = this.formulario.controls[nombreCampo].errors;
    if(errores) {
      const primerError = Object.keys(errores)[0];
      return this.validacionService.getMensajeError(primerError);
    } else {
      return '';
    }
  }

  //-------------------------------------------------------------------------------------
  // Lógica de negocio
  //-------------------------------------------------------------------------------------
  private cargarContacto(idContacto: number) {
  
    this.contactosService.getById(idContacto).subscribe(
      {      
    
        // Reciebe el siguiente valor
        next: (contacto: Contacto) =>  {        
        
          // Relleno el formulario con los datos del contacto
          this.formulario.patchValue(contacto);
        
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

  /**
   * Actualiza un contacto
   */
  private actualizarContacto() {
    // TO-DO: Implementar la lógica de actualización de contacto
    console.log('Actualizar contacto: ', this.formulario.getRawValue());

    this.contactosService.put(this.formulario.getRawValue()).subscribe(           
      {      
        // Reciebe el siguiente valor
        next: (contacto: Contacto) =>  {

          // Muestro un toast indicando que se ha guardado la receta
          this.dialogService.mostrarToast("Contacto actualizado");

          // Muestra el contacto en el log
          console.log(contacto);
        },

        // El observer ha recibido una notificación completa
        complete: () => {     
        },

        // El observer ha recibido un error
        error: (error : any) => {
          
          this.dialogService.mostrarMensaje('No ha sido posible actualizar el contacto: '+error, 'ERROR');
          console.log(error);
        }
      }
    );             
  }
  
  /**
   * Crea un contacto
   */
  private crearContacto() {
    this.contactosService.post(this.formulario.getRawValue()).subscribe(           
      {      
        // Reciebe el siguiente valor
        next: (contacto: Contacto) =>  {

          // Se ha guardado el contacto. Paso a modo edición
          this.router.navigate(['/contactos/editar', contacto.id ]);

          // Muestro un toast indicando que se ha guardado la receta
          this.dialogService.mostrarToast("Contacto creada");

          // Muestra el contacto en el log
          console.log(contacto);
        },

        // El observer ha recibido una notificación completa
        complete: () => {     
        },

        // El observer ha recibido un error
        error: (error : any) => {
          
          this.dialogService.mostrarMensaje('No ha sido posible crear el contacto: '+error, 'ERROR');
          console.log(error);
        }
      }
    );              
  }

}
