import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPage } from './modificar.page';

describe('ModificarPage', () => {
  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
