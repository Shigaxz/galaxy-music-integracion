import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocionPage } from './promocion.page';

describe('PromocionPage', () => {
  let component: PromocionPage;
  let fixture: ComponentFixture<PromocionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
