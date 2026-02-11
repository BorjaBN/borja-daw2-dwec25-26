import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  // -------------------------
  // Campo no vacío
  // -------------------------
  campoNoVacio(control: AbstractControl): ValidationErrors | null {
    const valor = control.value?.toString().trim();
    return valor && valor.length > 0 ? null : { vacio: true };
  }

  // -------------------------
  // Solo letras 
  // -------------------------
  soloLetras(control: AbstractControl): ValidationErrors | null {
    const valor = control.value || '';
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    return regex.test(valor) ? null : { soloLetras: true };
  }

  // -------------------------
  // Año con 4 dígitos
  // -------------------------
  anhoValido(control: AbstractControl): ValidationErrors | null {
    const valor = control.value?.toString();
    const regex = /^[0-9]{4}$/;

    return regex.test(valor) ? null : { anhoInvalido: true };
  }

  // -------------------------
  // Edición mayor que 0
  // -------------------------
  edicionValida(control: AbstractControl): ValidationErrors | null {
    const valor = Number(control.value);
    return valor > 0 ? null : { edicionInvalida: true };
  }

  // -------------------------
  // Mensajes de error para cada validacion
  // -------------------------
  getMensajeError(error: string): string {
    const mensajes: any = {
      vacio: 'El campo no puede estar vacío',
      soloLetras: 'Solo se permiten letras',
      anhoInvalido: 'Debe ser un año de 4 dígitos',
      edicionInvalida: 'La edición debe ser mayor que 0',
      required: 'Campo requerido',
      minlength: 'El texto es demasiado corto'
    };

    return mensajes[error] || 'Campo inválido';
  }
}
