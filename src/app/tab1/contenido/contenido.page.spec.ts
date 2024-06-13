import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidoPage } from './contenido.page';

describe('ContenidoPage', () => {
  let component: ContenidoPage;
  let fixture: ComponentFixture<ContenidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
