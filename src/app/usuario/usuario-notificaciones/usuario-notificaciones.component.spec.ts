import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNotificacionesComponent } from './usuario-notificaciones.component';

describe('UsuarioNotificacionesComponent', () => {
  let component: UsuarioNotificacionesComponent;
  let fixture: ComponentFixture<UsuarioNotificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioNotificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
