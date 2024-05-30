import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPageRoutingModule } from './modificar-routing.module';

import { ModificarPage } from './modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPageRoutingModule
  ],
  declarations: [ModificarPage]
})
export class ModificarPageModule {}
