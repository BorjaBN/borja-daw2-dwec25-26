import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  // Credenciales en la página
  credenciales = {

    login: '',
    pass: ''

  };

  errorInicioSesion: boolean = false;

  constructor(

    private router: Router,
    private autenticacionService: AutenticacionService

  ) { }

  ngOnInit(): void {
  }

  login() {

    this.autenticacionService.iniciarSesion(this.credenciales.login, this.credenciales.pass)
    .subscribe(resultado => {
        if(resultado) {
          this.router.navigate([ '/dashboard' ]);
        } else {
          this.errorInicioSesion = true;
        }
    });

  }
}
