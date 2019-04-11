import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoEditComponent } from './trayecto-edit.component';

describe('TrayectoEditComponent', () => {
  let component: TrayectoEditComponent;
  let fixture: ComponentFixture<TrayectoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
