import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHijoCaracteristicasComponent } from './empleado-hijo-caracteristicas.component';

describe('EmpleadoHijoCaracteristicasComponent', () => {
  let component: EmpleadoHijoCaracteristicasComponent;
  let fixture: ComponentFixture<EmpleadoHijoCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoHijoCaracteristicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoHijoCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
