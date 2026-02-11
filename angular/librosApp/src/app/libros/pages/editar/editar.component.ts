import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../../../shared/services/dialog.service';
import { ValidacionService } from '../../../shared/services/validacion.service';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../../interfaces/libro.interface';

@Component({

  selector: 'app-editar',
  templateUrl: './editar.component.html'

})

export class EditarComponent {
  
  formulario!: FormGroup;

  constructor(

    private fb: FormBuilder,
    private validacionService: ValidacionService,
    private dialogService: DialogService,
    private librosService: LibrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    
    this.formulario = this.fb.group({

      id: [-1],

      titulo: [
        '',
        [
          Validators.required,
          this.validacionService.campoNoVacio,
          Validators.minLength(3)
        ]
      ],

      autor: [
        '',
        [
          Validators.required,
          this.validacionService.campoNoVacio,
          this.validacionService.soloLetras,
          Validators.minLength(3)
        ]
      ],

      editorial: [
        '',
        [
          Validators.required,
          this.validacionService.campoNoVacio,
          Validators.minLength(3)
        ]
      ],

      anho_publicacion: [
        '',
        [
          Validators.required,
          this.validacionService.anhoValido
        ]
      ],

      num_edicion: [
        '',
        [
          Validators.required,
          this.validacionService.edicionValida
        ]
      ]

    });

  }

  ngOnInit(): void {

    const idLibro = this.activatedRoute.snapshot.params['id'];
    
    if (idLibro) {

      this.cargarLibro(idLibro);
    }

  }

  guardar() {

    if (this.formulario.invalid) {

      this.formulario.markAllAsTouched();

      this.dialogService.mostrarMensaje('Por favor, revise los datos');

      return;
    }

    if (this.formulario.get('id')?.value > 0) {

      this.actualizarLibro();

    } else {

      this.crearLibro();

    }
  }

  esCampoNoValido(nombreCampo: string): boolean {

    return this.formulario.controls[nombreCampo].errors != null;

  }

  mensajeErrorCampo(nombreCampo: string): string {

    const errores = this.formulario.controls[nombreCampo].errors;

    if (errores) {

      const primerError = Object.keys(errores)[0];

      return this.validacionService.getMensajeError(primerError);

    } else {

      return '';
    }
  }

  //-------------------------------------------------------------------------------------
  // Lógica de negocio
  //-------------------------------------------------------------------------------------
  
  private cargarLibro(idLibro: number) {

    this.librosService.getById(idLibro).subscribe({

      next: (libro: Libro) => {

        this.formulario.patchValue(libro);

        console.log(libro);
      },
      complete: () => {},

      error: (error: any) => {

        this.dialogService.mostrarMensaje('No ha sido posible cargar el libro: ' + error, 'ERROR');

        console.log(error);
      }
    });
  }

  private actualizarLibro() {

    console.log('Actualizar libro: ', this.formulario.getRawValue());

    this.librosService.put(this.formulario.getRawValue()).subscribe({
      next: (libro: Libro) => {

        this.dialogService.mostrarToast("Libro actualizado");

        console.log(libro);
      },
      complete: () => {},
      error: (error: any) => {

        this.dialogService.mostrarMensaje('No ha sido posible actualizar el libro: ' + error, 'ERROR');

        console.log(error);
      }
    });
  }

  private crearLibro() {

    this.librosService.post(this.formulario.getRawValue()).subscribe({
      next: (libro: Libro) => {

        this.router.navigate(['/libros/editar', libro.id]);

        this.dialogService.mostrarToast("Libro creado");

        console.log(libro);
      },
      complete: () => {},
      error: (error: any) => {

        this.dialogService.mostrarMensaje('No ha sido posible crear el libro: ' + error, 'ERROR');
        
        console.log(error);
      }
    });
  }
}