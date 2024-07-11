import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modificar/:id', loadChildren: () => import('./tab3/modificar/modificar.module').then(m => m.ModificarPageModule)
  },
  {
    path: 'promos/:id', loadChildren: () => import('./tab3/promo/promo.module').then(m => m.PromoPageModule)
  },
  {
    path: 'contenido', loadChildren: () => import('./tab1/contenido/contenido.module').then(m => m.ContenidoPageModule)
  },
  {
    path: 'register', loadChildren: () => import('./tab2/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'publicaciones', loadChildren: () => import('./tab3/publicaciones/publicaciones.module').then(m => m.PublicacionesPageModule)
  },
  {
    path: 'integracion', loadChildren: () => import('./tab3/integracion/integracion.module').then(m => m.IntegracionPageModule)
  },
  {
    path: 'explorar/:contenido', loadChildren: () => import('./tab1/contenido/explorar/explorar.module').then(m => m.ExplorarPageModule)
  },
  {
    path: 'promocion/:id',
    loadChildren: () => import('./tab3/integracion/promocion/promocion.module').then( m => m.PromocionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
