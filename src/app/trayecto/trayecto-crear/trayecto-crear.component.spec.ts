import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoCrearComponent } from './trayecto-crear.component';

describe('TrayectoCrearComponent', () => {
  let component: TrayectoCrearComponent;
  let fixture: ComponentFixture<TrayectoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
