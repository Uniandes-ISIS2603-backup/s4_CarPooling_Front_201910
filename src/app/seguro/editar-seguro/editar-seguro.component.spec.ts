import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSeguroComponent } from './editar-seguro.component';

describe('EditarSeguroComponent', () => {
  let component: EditarSeguroComponent;
  let fixture: ComponentFixture<EditarSeguroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSeguroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
