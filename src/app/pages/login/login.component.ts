import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public title: string;
  public usuario: Usuario;

  constructor() {
    this.title = 'Iniciar Sessión';
    this.usuario = new Usuario('', '', '', '', '', 0);
  }

  onSubmit(formLogin: NgForm) {
    console.log(this.usuario);
    console.log(formLogin.value);
    console.log(formLogin.valid);
  }

}
