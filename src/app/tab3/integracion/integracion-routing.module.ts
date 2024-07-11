import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegracionPage } from './integracion.page';

const routes: Routes = [
  {
    path: '',
    component: IntegracionPage
  },  {
    path: 'promocion',
    loadChildren: () => import('./promocion/promocion.module').then( m => m.PromocionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegracionPageRoutingModule {}
