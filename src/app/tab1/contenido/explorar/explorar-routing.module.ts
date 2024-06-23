import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorarPage } from './explorar.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorarPageRoutingModule {}
