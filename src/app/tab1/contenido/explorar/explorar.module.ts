import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorarPageRoutingModule } from './explorar-routing.module';

import { ExplorarPage } from './explorar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorarPageRoutingModule
  ],
  declarations: [ExplorarPage]
})
export class ExplorarPageModule {}
