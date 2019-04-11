import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSeguroComponent } from './crear-seguro.component';

describe('CrearSeguroComponent', () => {
  let component: CrearSeguroComponent;
  let fixture: ComponentFixture<CrearSeguroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSeguroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
