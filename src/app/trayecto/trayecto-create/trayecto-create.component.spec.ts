import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoCreateComponent } from './trayecto-create.component';

describe('TrayectoCreateComponent', () => {
  let component: TrayectoCreateComponent;
  let fixture: ComponentFixture<TrayectoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
