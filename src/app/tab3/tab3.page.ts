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
  nuevoProducto: any = {
    nombre: '',
    imagen:'',
    descripcion: '',
    categoria: '',
    precio: 0,
    stock: 0
  };
  usuarios: ClUsuario[] = [];
  productos: any[] = [];
  constructor(
    private databaseService: BaseDeDatosService,
    private router : Router) {}

  ngOnInit() {
    this.obtenerUsuarios();
    this.obtenerProductos();
  }
  ionViewWillEnter() {
    this.obtenerUsuarios();
    this.obtenerProductos();
  }
//FUNCIONES CRUD USUARIOS
  onSubmitt(userDataForm: NgForm) {
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
//FUNCIONES CRUD PRODUCTOS
  agregarProd(producto : any) {
    const coleccion = 'Productos';
    this.databaseService.crearDocumento(coleccion, this.nuevoProducto);
    alert("Producto agregado");
    this.nuevoProducto = {
      nombre: '',
      imagen:'',
      descripcion: '',
      categoria: '',
      precio: 0,
      stock: 0
    };
  }
  onSubmit(prodDataForm: NgForm) {
    if (prodDataForm.valid) {
      const formData = prodDataForm.value;
      this.nuevoProducto.nombre = formData.nombre;
      this.nuevoProducto.imagen = formData.imagen;
      this.nuevoProducto.descripcion = formData.descripcion;
      this.nuevoProducto.categoria = formData.categoria;
      this.nuevoProducto.precio = formData.precio;
      this.nuevoProducto.stock = formData.stock;
      this.agregarProd(this.nuevoProducto);
    }
  }
  async obtenerProductos()  {
    this.productos = await this.databaseService.leerColeccion('Productos')
  }
  promo(id: string) {
    this.router.navigate(['/promos', id]);
  }
}
