import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegracionPage } from './integracion.page';

describe('IntegracionPage', () => {
  let component: IntegracionPage;
  let fixture: ComponentFixture<IntegracionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
