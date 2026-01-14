import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from 'src/app/shared/services/dialog.service';
import { ValidacionService } from 'src/app/shared/services/validacion.service';

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
  formulario: FormGroup;
  

  // Defino campos sueltos auxiliares que voy a utilizar
  // En este caso utilizo este para el datalist aunque en este caso
  // lo podría meter dentro del formulario ya que no va a afectar al funcionamiento.
  //-nombreInformador    : FormControl = this.fb.control('', Validators.required);
  
  // Estos arrays contendrán los elementos que voy a cargar en los selects
  //-selectInformador    : EntradaSelect[] = [];
  //-selectAsignado      : EntradaSelect[] = [];
  //-selectTiposTarea    : EntradaSelect[] = [];
  //-selectEstadosTarea  : EntradaSelect[] = [];

  // Indica si la tarea se está actualizando
  actualizando: boolean = false;

  //-------------------------------------------------------------------------------------
  // Inicialización
  //-------------------------------------------------------------------------------------


  

  constructor(

    
    private fb                     : FormBuilder,
    private validacionService      : ValidacionService,
    private dialogService          : DialogComponent
    
    

  ) {

    this.formulario = this.fb.group({
      
      nombre: ['', [Validators.required, validacionService.validarEmpiezaMayuscula, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(5)]],
      telefono: ['', [Validators.required, Validators.minLength(9)]],
      empresa: ['', [Validators.required, Validators.minLength(3)]]

  }, {  
    
    validators: [ this.validacionService.camposNoIguales('nombre', 'apellidos')]

  });

   }

  /**
   * Inicialización de la página
   */
  ngOnInit(): void {

      
  }

  guardar(){

    if(this.formulario.markAllAsTouched){

      // Marco los campos como tocados. De ese modo se mostrarán todos los errores
      // registrados en los campos
      this.formulario.markAllAsTouched();

      // Muestro mensaje de error
      this.dialogService.mostrarMensaje('Por favor, revise los datos');

      //finaliza
      return;
    }

    // si id_tarea es > 0 significa que la tarea ya existía. Es actualización
    if(this.formulario.get('id')?.value > 0 ){

      // Actualiza el contacto
      this.actualizarContacto();


    } else {

      // Crea el contacto
      this.crearContacto();
    }

  }

  esCampoNoValido(nombreCampo: string) : boolean {
    return this.formulario.controls[nombreCampo].errors != null;
  }

  mensajeErrorCampo(nombreCampo: string) : string {
    const errores = this.formulario.controls[nombreCampo].errors;
    if(errores) {
      const primerError = Object.keys(errores)[0];
      return this.validacionService.getMensajeError(primerError);
    }else{
      return '';
    }
  }

}
