import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { PublicacionesPage } from './publicaciones.page';

describe('PublicacionesPage', () => {
  let component: PublicacionesPage;
  let fixture: ComponentFixture<PublicacionesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicacionesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
