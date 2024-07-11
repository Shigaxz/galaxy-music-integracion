import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/servicios/rest.service';
import { ClProducto } from 'src/app/model/ClProducto';
@Component({
  selector: 'app-integracion',
  templateUrl: './integracion.page.html',
  styleUrls: ['./integracion.page.scss'],
})
export class IntegracionPage implements OnInit {
  instrumentos: ClProducto[] = [];
  discos: ClProducto[] = [];
  constructor(
    public api: RestService,
    private router: Router) { }

  ngOnInit(): void {
    this.api.getProductos().subscribe(
      productos => {
        this.instrumentos = productos.filter(producto => producto.disco === null);
        this.discos = productos.filter(producto => producto.instrumento === null);
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
  
  promocion(id: number) {
    this.router.navigate(['/promocion', id]);
  }

}
