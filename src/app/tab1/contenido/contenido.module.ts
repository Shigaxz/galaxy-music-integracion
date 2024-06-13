import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidoPageRoutingModule } from './contenido-routing.module';

import { ContenidoPage } from './contenido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoPageRoutingModule
  ],
  declarations: [ContenidoPage]
})
export class ContenidoPageModule {}
