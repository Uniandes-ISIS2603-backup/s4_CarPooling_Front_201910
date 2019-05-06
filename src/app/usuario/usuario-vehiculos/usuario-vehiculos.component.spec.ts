import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioVehiculosComponent } from './usuario-vehiculos.component';

describe('UsuarioVehiculosComponent', () => {
  let component: UsuarioVehiculosComponent;
  let fixture: ComponentFixture<UsuarioVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
