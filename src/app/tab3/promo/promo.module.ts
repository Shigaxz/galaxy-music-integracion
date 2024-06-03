import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromoPageRoutingModule } from './promo-routing.module';

import { PromoPage } from './promo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromoPageRoutingModule
  ],
  declarations: [PromoPage]
})
export class PromoPageModule {}
