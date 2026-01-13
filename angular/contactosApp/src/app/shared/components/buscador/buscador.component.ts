import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  // Término de búsqueda
  termino: string = '';

  @Input() placeholder: string = '';

  @Output() onBusquedaEjecutada: EventEmitter<string> = new EventEmitter(); 
  //EventEmitter<string> emite un evento de tipo string

  constructor() { }
  
  ngOnInit(): void {
    
  }

  buscar() : void {
    this.onBusquedaEjecutada.emit(this.termino);
  }  
}
