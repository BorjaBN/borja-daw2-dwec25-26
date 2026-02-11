export interface Libro {

  id?: number;
  titulo: string;
  autor: string;
  editorial: string;
  anho_publicacion: number;
  num_edicion: number;

  [key: string]: any; // Con esto le estamos diciedno que puede 
                      // indexar el objeto con strings
  
}