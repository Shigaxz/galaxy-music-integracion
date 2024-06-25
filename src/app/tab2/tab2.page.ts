import { Component } from '@angular/core';
import { BaseDeDatosService } from '../servicios/base-de-datos.service';
import { ClUsuario } from '../model/ClUsuario';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  username: string = '';
  password: string = '';
  constructor(public db: BaseDeDatosService,
    private router: Router,
  ) {}

  async login() {
    try {
      const user:ClUsuario = await this.db.buscarUsuario("Usuario",this.username, this.password);
      this.db.sesionUser = user;
      this.db.sesion = true;
      alert("Bienvenido "+ user.nombre);
      this.router.navigate(['/tabs/tab1']);
    } catch (error) {
      
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

  async logout() {
      this.db.sesion = false;
      const clearUser:ClUsuario= {
        id: '',
        nombre: '',
        username: '',
        correo: '',
        password: '',
        rol: 0
      };
      this.db.sesionUser = clearUser;
  }
}
