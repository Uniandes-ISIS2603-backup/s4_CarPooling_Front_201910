import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoBuscarEspecificoComponent } from './trayecto-buscar-especifico.component';

describe('TrayectoBuscarEspecificoComponent', () => {
  let component: TrayectoBuscarEspecificoComponent;
  let fixture: ComponentFixture<TrayectoBuscarEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoBuscarEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoBuscarEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
