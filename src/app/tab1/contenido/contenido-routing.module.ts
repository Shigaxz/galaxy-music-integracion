import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidoPage } from './contenido.page';

const routes: Routes = [
  {
    path: '',
    component: ContenidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenidoPageRoutingModule {}
