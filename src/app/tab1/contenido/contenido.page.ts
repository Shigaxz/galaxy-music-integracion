import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDeDatosService } from '../../servicios/base-de-datos.service';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {
  
  publicaciones: string = 'publicaciones';
  promociones: string = 'promociones';
  influencers: string = 'influencers';
  constructor(
    private router:Router,
    public bdd: BaseDeDatosService
  ) { }

  ngOnInit() {
  }
  explorar(contenido: string) {
    this.router.navigate(['/explorar', contenido]);
  }

}
