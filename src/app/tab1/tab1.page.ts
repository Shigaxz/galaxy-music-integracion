import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDeDatosService } from '../servicios/base-de-datos.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    private router: Router,
    public bdd: BaseDeDatosService
  ) {}

  
  verContenido() {
    this.router.navigate(['/contenido']);
  }
  
}
