import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBuscarListaComponent } from './usuario-buscar-lista.component';

describe('UsuarioBuscarListaComponent', () => {
  let component: UsuarioBuscarListaComponent;
  let fixture: ComponentFixture<UsuarioBuscarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioBuscarListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioBuscarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
