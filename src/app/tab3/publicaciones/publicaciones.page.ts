import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';
import { NgForm } from '@angular/forms';
import { ClPublicacion } from 'src/app/model/ClPublicacion';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {
  nuevaPublicacion: ClPublicacion = {
    titulo: '',
    contenido: '',
    imagen: '',
    fecha: ''
  };
  publicaciones: any[] = [];
  constructor(private databaseService: BaseDeDatosService) { }

  ngOnInit() {
    this.obtenerPublicaciones();
  }

  onSubmitt(publiDataForm: NgForm) {
    if (publiDataForm.valid) {
      const formData = publiDataForm.value;
      this.nuevaPublicacion.titulo = formData.titulo;
      this.nuevaPublicacion.contenido = formData.contenido;
      this.nuevaPublicacion.imagen = formData.imagen;
      this.nuevaPublicacion.fecha = formData.fecha;
      this.agregarPublicacion(this.nuevaPublicacion);
    }
  }
  agregarPublicacion(nuevaPublicacion : ClPublicacion) {
    const coleccion = 'Publicaciones';
    this.databaseService.crearDocumento(coleccion, this.nuevaPublicacion);
    alert("Nueva Publicacion agregada");
    this.nuevaPublicacion = {
      titulo: '',
      contenido: '',
      imagen: '',
      fecha: ''
    };
  }
  async obtenerPublicaciones()  {
    this.publicaciones = await this.databaseService.leerColeccion('Publicaciones')
  }
  async eliminarPublicaciones(id: string) {
    await this.databaseService.eliminarDocumento('Publicaciones', id);
    alert("Publicacion id:"+id+" eliminado correctamente");
    this.obtenerPublicaciones();
  }
}
