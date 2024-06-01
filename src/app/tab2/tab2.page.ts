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

  nuevoUsuario: any = {
    nombre: '',
    username: '',
    password: ''
  };
  constructor(private db: BaseDeDatosService,
    private router: Router
  ) {}

  async login() {
    try {
      const user:ClUsuario = await this.db.buscarUsuario("Usuario",this.username, this.password);
      //this.router.navigate(['/home']);
      this.db.sesionUser = user;
      this.db.sesion = true;
      alert("Bienvenido "+ user.nombre);
    } catch (error) {
      alert("Usuario no encontrado");
    }
  }

  onSubmit(userDataForm: NgForm) {
    if (userDataForm.valid) {
      const formData = userDataForm.value;
      this.nuevoUsuario.nombre = formData.nombre;
      this.nuevoUsuario.username = formData.username;
      this.nuevoUsuario.password = formData.password;
      this.agregarUsuario(this.nuevoUsuario);
      
    }
  }
  agregarUsuario(usuario : ClUsuario) {
    const coleccion = 'Usuario';
    this.db.crearDocumento(coleccion, this.nuevoUsuario);
    alert("Usuario agregado");
    this.nuevoUsuario = {
      nombre: '',
      username: '',
      password: ''
    };
  }
}
