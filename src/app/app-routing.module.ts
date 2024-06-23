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
    path: 'explorar/:contenido', loadChildren: () => import('./tab1/contenido/explorar/explorar.module').then(m => m.ExplorarPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
