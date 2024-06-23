import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
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
    private router:Router
  ) { }

  ngOnInit() {
  }
  explorar(contenido: string) {
    this.router.navigate(['/explorar', contenido]);
  }
}
