import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from '../../servicios/base-de-datos.service';
import { ClUsuario } from '../../model/ClUsuario';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nuevoUsuario: any = {
    nombre: '',
    username: '',
    correo: '',
    password: '',
    rol: 0
  };
  constructor(private db: BaseDeDatosService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(userDataForm: NgForm) {
    if (userDataForm.valid) {
      const formData = userDataForm.value;
      this.nuevoUsuario.nombre = formData.nombre;
      this.nuevoUsuario.username = formData.username;
      this.nuevoUsuario.correo = formData.correo;
      this.nuevoUsuario.password = formData.password;
      this.agregarUsuario(this.nuevoUsuario);
      
    }
  }
  agregarUsuario(usuario : ClUsuario) {
    const coleccion = 'Usuario';
    this.db.crearDocumento(coleccion, this.nuevoUsuario);
    alert("Cuenta creada correctamente");
    this.nuevoUsuario = {
      nombre: '',
      username: '',
      correo: '',
      password: ''
    };
  }
}
