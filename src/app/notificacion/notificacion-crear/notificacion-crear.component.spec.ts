import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionCrearComponent } from './notificacion-crear.component';

describe('NotificacionCrearComponent', () => {
  let component: NotificacionCrearComponent;
  let fixture: ComponentFixture<NotificacionCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
