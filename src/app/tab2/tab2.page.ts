import { Component } from '@angular/core';
import { BaseDeDatosService } from '../servicios/base-de-datos.service';
import { ClUsuario } from '../model/ClUsuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  username: string = '';
  password: string = '';

  constructor(private db: BaseDeDatosService,
    private router: Router
  ) {}

  async login() {
    try {
      const user:ClUsuario = await this.db.buscarUsuario("Usuario",this.username, this.password);
      //this.router.navigate(['/home']);
      alert("Bienvenido "+ user.nombre);
    } catch (error) {
      alert("Usuario no encontrado");
    }
  }
}
