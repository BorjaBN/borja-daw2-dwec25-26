import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Contacto } from '../interfaces/contacto.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  // URL del recurso de contactos
  private URL_CONTACTOS = `${environment.apiUrl}/contactos`;

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
   * Descarga la lista de contactos
   * 
   * @returns 
   */
  get(filtro : string|null = null): Observable<Contacto[]> {

    if(filtro && filtro.trim().length > 0) {
      return this.httpClient.get<Contacto[]>(`${this.URL_CONTACTOS}?q=${filtro.trim()}`);
    } else {
      return this.httpClient.get<Contacto[]>(this.URL_CONTACTOS);
    }    
  }

  /**
   * Descarga el contacto con el ID indicado
   * 
   * @returns 
   */
  getById(id: number): Observable<Contacto> {
      return this.httpClient.get<Contacto>(`${this.URL_CONTACTOS}/${id}`);
  }


  /**
   * Actualiza un contacto
   */
  put(contacto : Contacto) : Observable<Contacto> {

    // URL del recurso a actualizar
    const url = `${this.URL_CONTACTOS}/${contacto.id}`;

    return this.httpClient.put<Contacto>(url, contacto);
  }

  /**
   * Crea un contacto
   */
  post(contacto : Contacto) : Observable<Contacto> {

    // Nos aseguramos de que el contacto no tiene atributo ID
    delete contacto.id;    

    return this.httpClient.post<Contacto>(this.URL_CONTACTOS, contacto);
  }
}
