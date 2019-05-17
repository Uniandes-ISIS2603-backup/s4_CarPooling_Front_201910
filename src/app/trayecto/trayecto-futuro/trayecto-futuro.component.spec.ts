import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoFuturoComponent } from './trayecto-futuro.component';

describe('TrayectoFuturoComponent', () => {
  let component: TrayectoFuturoComponent;
  let fixture: ComponentFixture<TrayectoFuturoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoFuturoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoFuturoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
