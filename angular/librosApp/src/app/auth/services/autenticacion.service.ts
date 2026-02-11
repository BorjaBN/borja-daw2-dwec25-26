import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable, of } from 'rxjs';
import { LoginRequest } from '../interfaces/loginrequest.interface';
import { LoginResponse } from '../interfaces/loginresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  // URL al recurso empleado para inicio de sesión
  private URL_LOGIN = `${environment.apiUrl}/login`;

  // Token JWT que nos devuelve el servidor al iniciar sesión
  private jwtToken : string | null = null;

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Permite iniciar sesión
   * 
   * @param login 
   * @param pass 
   */
  iniciarSesion(login: string, pass: string) : Observable<boolean> {

    // Crea el objeto que contiene las credenciales
    const credenciales : LoginRequest = {
      email: login,
      password: pass
    }

    // Retorna un observable
    return this.httpClient.post<LoginResponse>(this.URL_LOGIN, credenciales)
    .pipe(
      map((response) => {

        // Toma el token JWT y lo almacena
        this.jwtToken = response.accessToken;

        // Si estoy en este punto, devuelvo true.
        // Si hay error de autenticación lo debe gestionar el
        // cliente
        return true;
      })
    );
  }

  /**
   * Retorna true si la sesión estuviera iniciada
   * 
   * @returns true si la sesión está iniciada
   */
  isSesionIniciada(sinc = false): any { // Observable<boolean> {    
    return sinc ? this.jwtToken : of(this.jwtToken != null);
  }  


  /**
   * Retorna el token JWT
   * 
   * @returns 
   */
  getJwtToken(): string | null {
    return this.jwtToken;   
  }

  /**
   * Cierra la sesión
   */
  cerrarSesion(): void {
    this.jwtToken = null;
  }

}
