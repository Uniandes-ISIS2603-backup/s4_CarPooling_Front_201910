import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInfoTrayectoComponent } from './crear-info-trayecto.component';

describe('CrearInfoTrayectoComponent', () => {
  let component: CrearInfoTrayectoComponent;
  let fixture: ComponentFixture<CrearInfoTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearInfoTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInfoTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
