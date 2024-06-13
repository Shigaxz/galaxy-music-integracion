import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClPromociones } from 'src/app/model/ClPromocion';
import { RestService

 } from 'src/app/servicios/rest.service';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {
  promociones: any[] = [];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
  };
  constructor(
    private rest: RestService
  ) { }

  ngOnInit() {
    this.getPromos();
  }

  getPromos() {
    this.rest.getPromo().subscribe(
      (data: ClPromociones[]) => {
        console.log('Datos recibidos:', data);
        this.promociones = data;

      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
