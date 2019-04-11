import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoDetailComponent } from './trayecto-detail.component';

describe('TrayectoDetailComponent', () => {
  let component: TrayectoDetailComponent;
  let fixture: ComponentFixture<TrayectoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
