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
  instrumento: any = {
    id: '',
    instrumento: '',
    tipoInstrumento:'',
    marca: '',
    precio: 0,
    stock: 0
  };
  disco: any = {
    id: '',
    disco: '',
    tipoInstrumento:'',
    marca: '',
    precio: 0,
    stock: 0
  };
  descuento: number = 0;
  
  promoi: any = {
    id: 0,
    prod : this.instrumento,
    descuento: 0,
    precioFinal: 0,
    fechaInic: "",
    fechaTerm: ""
  }
  promod: any = {
    id: 0,
    prod : this.disco,
    descuento: 0,
    precioFinal: 0,
    fechaInic: "",
    fechaTerm: ""
  }
  instrumentos: any[]=[];
  discos: any[]=[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private databaseService: BaseDeDatosService,
    public api: RestService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      if (this.api.prod == 'instrumento') {
        this.obtenerInstrumento(id);
      } else {
        this.obtenerDisco(id);
      }
    }
  }

  async obtenerInstrumento(id: string) {
    try {
      const data = await this.api.getIns().toPromise();
      if (data) {
        const instrumentoEncontrado = data.find(instrumento => instrumento.id === +id);
  
        if (instrumentoEncontrado) {
          this.instrumento = instrumentoEncontrado;
        } else {
          console.log('Instrumento no encontrado');
        }
      } else {
        console.log('No se recibieron datos');
      }
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  async obtenerDisco(id: string) {
    try {
      const data = await this.api.getDis().toPromise();
      if (data) {
        const discoEncontrado = data.find(disco => disco.id === +id);
  
        if (discoEncontrado) {
          this.disco = discoEncontrado;
          console.log(this.disco);
        } else {
          console.log('Instrumento no encontrado');
        }
      } else {
        console.log('No se recibieron datos');
      }
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }
  
  async agregarPromo(promo : any) {
    const coleccion = 'Promociones';
    this.databaseService.crearDocumento(coleccion, promo);
    alert("promocion creada correctamente");
  }

  
  onSubmitt(promoiDataForm: NgForm) {
  if (promoiDataForm.valid) {
  const formData = promoiDataForm.value;
  this.promoi.id =  this.idRandom();
  this.promoi.prod = this.instrumento;
  this.promoi.descuento = (formData.descuento *100).toFixed(2)+'%';
  this.descuento = Number(this.instrumento.precio) * Number(formData.descuento);
  this.promoi.precioFinal = this.instrumento.precio - this.descuento;
  this.promoi.fechaInic = formData.fechaInic;
  this.promoi.fechaTerm = formData.fechaTerm;
  this.agregarPromo(this.promoi);
  }
}
  onSubmit(promodDataForm: NgForm) {
    if (promodDataForm.valid) {
    const formData = promodDataForm.value;
    this.promod.id =  this.idRandom();
    this.promod.prod = this.disco;
    this.promod.descuento = (formData.descuento *100).toFixed(2)+'%';
    this.descuento = Number(this.disco.precio) * Number(formData.descuento);
    this.promod.precioFinal = this.disco.precio - this.descuento;
    this.promod.fechaInic = formData.fechaInic;
    this.promod.fechaTerm = formData.fechaTerm;
    this.agregarPromo(this.promod);
    }
    }
  idRandom(): number {
    const min = Math.pow(10, 10 - 1);
    const max = Math.pow(10, 10) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
