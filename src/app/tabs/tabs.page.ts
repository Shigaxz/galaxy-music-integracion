import { Component } from '@angular/core';

import { BaseDeDatosService } from '../servicios/base-de-datos.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public bdd: BaseDeDatosService) {}

}
