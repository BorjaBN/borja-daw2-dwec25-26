import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionInterceptorService implements HttpInterceptor {

  constructor(
    private autenticacionService: AutenticacionService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // Define la petición
    let peticion : HttpRequest<any>;

    // Obtiene el token JWT
    const tokenJWT = this.autenticacionService.getJwtToken();

    if(tokenJWT == null) {

      // El usuario no se ha autenticado.
      peticion = req;
    } else {

      // Si El usuario se ha autenticado clonamos la petición
      peticion = req.clone({

        // Insertamos en la petición el token JWT
        setHeaders: {
          Authorization: `Bearer ${tokenJWT}`,
        }
      });
    }
    
    // Invoca al siguiente interceptor
    return next.handle(peticion);    
  }
}
