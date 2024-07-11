import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionPageRoutingModule } from './promocion-routing.module';

import { PromocionPage } from './promocion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionPageRoutingModule
  ],
  declarations: [PromocionPage]
})
export class PromocionPageModule {}
