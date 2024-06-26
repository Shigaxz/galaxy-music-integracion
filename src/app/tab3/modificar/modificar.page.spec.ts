import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { ModificarPage } from './modificar.page';

describe('ModificarPage', () => {
  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
