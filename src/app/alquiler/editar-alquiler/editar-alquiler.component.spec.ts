import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlquilerComponent } from './editar-alquiler.component';

describe('EditarAlquilerComponent', () => {
  let component: EditarAlquilerComponent;
  let fixture: ComponentFixture<EditarAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
