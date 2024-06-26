import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidoPage } from './contenido.page';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
describe('ContenidoPage', () => {
  let component: ContenidoPage;
  let fixture: ComponentFixture<ContenidoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenidoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ContenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
