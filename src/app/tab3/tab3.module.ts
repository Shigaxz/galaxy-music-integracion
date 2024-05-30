import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { BaseDeDatosService } from '../servicios/base-de-datos.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importa AngularFirestore
import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Tab3Page],
  providers: [BaseDeDatosService, AngularFirestore]
})
export class Tab3PageModule {}
