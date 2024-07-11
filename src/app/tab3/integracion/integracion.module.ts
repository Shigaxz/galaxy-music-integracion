import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegracionPageRoutingModule } from './integracion-routing.module';

import { IntegracionPage } from './integracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegracionPageRoutingModule
  ],
  declarations: [IntegracionPage]
})
export class IntegracionPageModule {}
