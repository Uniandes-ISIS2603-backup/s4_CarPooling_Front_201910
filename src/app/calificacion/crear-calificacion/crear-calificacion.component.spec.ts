import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCalificacionComponent } from './crear-calificacion.component';

describe('CrearCalificacionComponent', () => {
  let component: CrearCalificacionComponent;
  let fixture: ComponentFixture<CrearCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
