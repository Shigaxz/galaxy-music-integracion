import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExplorarPage } from './explorar.page';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
describe('ExplorarPage', () => {
  let component: ExplorarPage;
  let fixture: ComponentFixture<ExplorarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorarPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ExplorarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
