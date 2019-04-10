import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPeajeComponent } from './crear-peaje.component';

describe('CrearPeajeComponent', () => {
  let component: CrearPeajeComponent;
  let fixture: ComponentFixture<CrearPeajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPeajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPeajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
