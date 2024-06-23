import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicacionesPage } from './publicaciones.page';

describe('PublicacionesPage', () => {
  let component: PublicacionesPage;
  let fixture: ComponentFixture<PublicacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
