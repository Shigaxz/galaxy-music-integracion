import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromoPage } from './promo.page';

describe('PromoPage', () => {
  let component: PromoPage;
  let fixture: ComponentFixture<PromoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
