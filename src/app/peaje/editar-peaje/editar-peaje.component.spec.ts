import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeajeComponent } from './editar-peaje.component';

describe('EditarPeajeComponent', () => {
  let component: EditarPeajeComponent;
  let fixture: ComponentFixture<EditarPeajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPeajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPeajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
