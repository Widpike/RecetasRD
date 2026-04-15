import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercadosPage } from './mercados.page';

describe('MercadosPage', () => {
  let component: MercadosPage;
  let fixture: ComponentFixture<MercadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
