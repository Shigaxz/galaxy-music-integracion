import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarPage } from './modificar.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarPageRoutingModule {}
