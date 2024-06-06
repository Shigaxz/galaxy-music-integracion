import { Component } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import { ClPromociones } from '../model/ClPromocion';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  promociones: any[] = [];
  constructor(
    private rest: RestService
  ) {}

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
