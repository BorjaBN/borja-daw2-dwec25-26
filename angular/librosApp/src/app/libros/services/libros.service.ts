
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  // URL del recurso de libros
  private URL_LIBROS = `${environment.apiUrl}/libros`;

  /**
   * Inicializa el servicio
   * 
   * @param httpClient 
   */
  constructor(
    
    // Cliente HTTP de Angular
    private httpClient: HttpClient

  ) { }

  

  /**
   * Descarga la lista de libros con filtro opcional
   * @param filtro Término de búsqueda
   * @param ordenarPor Campo por el que ordenar
   * @param orden Orden ascendente (asc) o descendente (desc)
   * @param pagina Número de página
   * @param limite Número de registros por página
   */
  get(
    filtro: string | null = null,
    ordenarPor: string | null = null,
    orden: 'asc' | 'desc' = 'asc'
  ): Observable<Libro[]> {
      
    let url = this.URL_LIBROS; // de donde lo saco
    const params: string[] = []; //array donde guardo las cosas 

    if (filtro && filtro.trim().length > 0) {      //para el buscador
                                                  // la q es para que pueda buscar en varios aprametros a la vez
      params.push(`q=${filtro.trim()}`);
    }

    if (ordenarPor) {
      params.push(`_sort=${ordenarPor}`);
      params.push(`_order=${orden}`);
    }

    if (params.length > 0) {
      url += '?' + params.join('&');  //para crear la url con los parametros elegidos (si ordenado o busqueda)
    }

    return this.httpClient.get<Libro[]>(url);
  }


  /**
   * Descarga el libro con el ID indicado
   */
  getById(id: number): Observable<Libro> {

    return this.httpClient.get<Libro>(`${this.URL_LIBROS}/${id}`);

  }

  /**
   * Actualiza un libro
   */
  put(libro: Libro): Observable<Libro> {

    // URL del recurso a actualizar
    const url = `${this.URL_LIBROS}/${libro.id}`;

    return this.httpClient.put<Libro>(url, libro);
  }

  /**
   * Crea un libro
   */
  post(libro: Libro): Observable<Libro> {

    // Nos aseguramos de que el libro no tiene atributo ID
    delete libro.id;

    return this.httpClient.post<Libro>(this.URL_LIBROS, libro);
  }

  /**
   * Elimina un libro
   */
  delete(id: number): Observable<void> {

    return this.httpClient.delete<void>(`${this.URL_LIBROS}/${id}`);
  }

  
}




