import { Component, OnInit } from '@angular/core';

import { RestService } from 'src/app/servicios/rest.service';
import { ClProducto } from 'src/app/model/ClProducto';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.page.html',
  styleUrls: ['./promocion.page.scss'],
})
export class PromocionPage implements OnInit {
  producto: any = {
    id_producto: 0,
    disco: null,
    instrumento: null,
    precio: 0,
    stock: 0,
    estado: false
  }
  promo: any = {
    id: 0,
    prod : this.producto,
    descuento: 0,
    precioFinal: 0,
    fechaInic: "",
    fechaTerm: ""
  }
  descuento: number = 0;
  constructor(
    private route: ActivatedRoute,
    public api: RestService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
      this.api.getProductos().subscribe(
        productos => {
          this.producto = productos.find(producto => producto.id_producto === Number(id));
          console.log(this.producto)
        },
        error => {
          console.error('Error al obtener productos:', error);
        }
      );
  }

  onSubmitt(promoiDataForm: NgForm) {
    if (promoiDataForm.valid) {
    const formData = promoiDataForm.value;
    this.promo.id =  this.idRandom();
    this.promo.prod = this.producto;
    this.promo.descuento = (formData.descuento *100).toFixed(2)+'%';
    this.descuento = Number(this.producto.precio) * Number(formData.descuento);
    this.promo.precioFinal = this.producto.precio - this.descuento;
    this.promo.fechaInic = formData.fechaInic;
    this.promo.fechaTerm = formData.fechaTerm;
    this.agregarPromo(this.promo);
    alert('Promocion agregada correctamente');
    }
  }

  onSubmit(promodDataForm: NgForm) {
    if (promodDataForm.valid) {
    const formData = promodDataForm.value;
    this.promo.id =  this.idRandom();
    this.promo.prod = this.producto;
    this.promo.descuento = (formData.descuento *100).toFixed(2)+'%';
    this.descuento = Number(this.producto.precio) * Number(formData.descuento);
    this.promo.precioFinal = this.producto.precio - this.descuento;
    this.promo.fechaInic = formData.fechaInic;
    this.promo.fechaTerm = formData.fechaTerm;
    this.agregarPromo(this.promo);
    alert('Promocion agregada correctamente');
    }
  }

  agregarPromo(promo : any) {
    this.api.addPromo(promo).subscribe(
      response => {
        console.log('Promoción añadida:', response);
      },
      error => {
        console.error('Error al añadir promoción:', error);
      }
    );
  }

  idRandom(): number {
    const min = Math.pow(10, 10 - 1);
    const max = Math.pow(10, 10) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
