import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBuscarEspecificoComponent } from './usuario-buscar-especifico.component';

describe('UsuarioBuscarEspecificoComponent', () => {
  let component: UsuarioBuscarEspecificoComponent;
  let fixture: ComponentFixture<UsuarioBuscarEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioBuscarEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioBuscarEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
