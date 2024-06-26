import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClPublicacion } from 'src/app/model/ClPublicacion';
import { ClUsuario } from 'src/app/model/ClUsuario';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';
import { RestService } from 'src/app/servicios/rest.service';
@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {
  cont: string | null = '';
  promociones: any[] = [];
  publicaciones: ClPublicacion[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public databaseService:BaseDeDatosService) { }

  ngOnInit() {
    this.cont = this.route.snapshot.paramMap.get('contenido');
    if (this.cont == 'promociones') {
      this.obtenerPromociones();
    } else if (this.cont == 'publicaciones') {
      this.obtenerPublicaciones();
    } else {

    }
  }                                                                                                                                                                         
  async obtenerPublicaciones()  {
    this.publicaciones = await this.databaseService.leerColeccion('Publicaciones')
  }

  async obtenerPromociones()  {
    this.promociones = await this.databaseService.leerColeccion('Promociones')
  }
  
}
