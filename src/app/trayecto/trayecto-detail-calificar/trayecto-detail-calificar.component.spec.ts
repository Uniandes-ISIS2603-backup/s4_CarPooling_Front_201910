import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoDetailCalificarComponent } from './trayecto-detail-calificar.component';

describe('TrayectoDetailCalificarComponent', () => {
  let component: TrayectoDetailCalificarComponent;
  let fixture: ComponentFixture<TrayectoDetailCalificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoDetailCalificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoDetailCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
