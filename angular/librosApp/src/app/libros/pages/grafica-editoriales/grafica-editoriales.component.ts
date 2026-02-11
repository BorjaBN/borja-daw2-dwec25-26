import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../../interfaces/libro.interface';
import * as CanvasJS from '@canvasjs/charts';

@Component({
  selector: 'app-grafica-editoriales',
  templateUrl: './grafica-editoriales.component.html'
})
export class GraficaEditorialesComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.librosService.get().subscribe(libros => {
      this.libros = libros;
      this.generarGrafica();
    });
  }

  generarGrafica(): void {

    // Contar libros por editorial
    const conteo: { [editorial: string]: number } = {};

    this.libros.forEach(libro => {
      const editorial = libro.editorial || "Sin editorial";
      conteo[editorial] = (conteo[editorial] || 0) + 1;
    });

    // Convertir a formato CanvasJS
    const dataPoints = Object.keys(conteo).map(editorial => ({
      label: editorial,
      y: conteo[editorial]
    }));

    const chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Número de libros por editorial"
      },
      axisY: {
        title: "Cantidad"
      },
      data: [{
        type: "column",
        dataPoints
      }]
    });

    chart.render();
  }
}
