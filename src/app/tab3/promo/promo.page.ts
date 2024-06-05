import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';
import { RestService } from 'src/app/servicios/rest.service';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.page.html',
  styleUrls: ['./promo.page.scss'],
})
export class PromoPage implements OnInit {
  producto: any = {
    id: '',
    nombre: '',
    imagen:'',
    descripcion: '',
    categoria: '',
    precio: 0,
    stock: 0
  };
  promo: any = {
    id: 0,
    prod : this.producto,
    descuento: 0,
    fechaInic: "",
    fechaTerm: ""
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private databaseService: BaseDeDatosService,
    private rest: RestService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerProducto(id);
    }
  }
  async obtenerProducto(id: string) {
    const productos = await this.databaseService.leerColeccion('Productos');
    this.producto = productos.find(u => u.id === id);
  }
  
  async agregarPromo(promo: any) {
    this.promo.id =  this.idRandom ;
    await this.rest.addPromo(promo).subscribe(
      () => {
        this.navCtrl.navigateBack('/promo-list');  // Navegar de regreso a la lista de promos
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onSubmit(promoDataForm: NgForm) {
    if (promoDataForm.valid) {
      const formData = promoDataForm.value;
      this.promo.prod = this.producto;
      this.promo.descuento = formData.descuento;
      this.promo.fechaInic = formData.fechaInic;
      this.promo.fechaTerm = formData.fechaTerm;
      this.agregarPromo(this.promo);
    }
  }
  idRandom(): number {
    const min = Math.pow(10, 10 - 1);
    const max = Math.pow(10, 10) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
