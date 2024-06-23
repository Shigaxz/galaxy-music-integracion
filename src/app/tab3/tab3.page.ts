import { Component } from '@angular/core';
import { BaseDeDatosService } from '../servicios/base-de-datos.service'; 
import { ClUsuario } from '../model/ClUsuario';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/servicios/rest.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usuarios: ClUsuario[] = [];
  productos: any[] = [];

  instrumentos: any[]=[];
  discos: any[]=[];
  constructor(
    private databaseService: BaseDeDatosService,
    private router : Router,
    private api: RestService) {}

  ngOnInit() {
    this.obtenerUsuarios();
    this.obtenerProductos();
    this.getProds()
  }
  ionViewWillEnter() {
    this.obtenerUsuarios();
    this.obtenerProductos();
    this.getProds();
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

  async obtenerProductos()  {
    this.productos = await this.databaseService.leerColeccion('Productos')
  }
  promo(id: string) {
    this.router.navigate(['/promos', id]);
  }
  publicaciones() {
    this.router.navigate(['/publicaciones']);
  }

  getProds() {
    this.api.getIns().subscribe(
      (data: any[]) => {
        console.log('Datos recibidos:', data);
        this.instrumentos = data;

      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
    this.api.getDis().subscribe(
      (data: any[]) => {
        console.log('Datos recibidos:', data);
        this.discos = data;

      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

}
