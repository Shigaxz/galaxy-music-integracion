import { Component } from '@angular/core';
import { BaseDeDatosService } from '../servicios/base-de-datos.service'; 
import { ClUsuario } from '../model/ClUsuario';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  nuevoUsuario: any = {
    nombre: '',
    username: '',
    password: ''
  };
  usuarios: ClUsuario[] = [];

  constructor(
    private databaseService: BaseDeDatosService,
    private router : Router) {}

  ngOnInit() {
    this.obtenerUsuarios();
  }
  ionViewWillEnter() {
    this.obtenerUsuarios();
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
    this.databaseService.crearDocumento(coleccion, this.nuevoUsuario);
    alert("Usuario agregado");
    this.nuevoUsuario = {
      nombre: '',
      username: '',
      password: ''
    };
  }
  async eliminarUsuario(id: string) {
    await this.databaseService.eliminarDocumento('Usuario', id);
    alert("Usuario id:"+id+" eliminado correctamente");
    this.obtenerUsuarios();
  }

  async obtenerUsuarios()  {
    this.usuarios = await this.databaseService.leerColeccion('Usuario')
  }
  editarUsuario(id: string) {
    this.router.navigate(['/modificar', id]);
  }
}
