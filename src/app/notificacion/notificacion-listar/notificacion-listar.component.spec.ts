import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionListarComponent } from './notificacion-listar.component';

describe('NotificacionListarComponent', () => {
  let component: NotificacionListarComponent;
  let fixture: ComponentFixture<NotificacionListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
