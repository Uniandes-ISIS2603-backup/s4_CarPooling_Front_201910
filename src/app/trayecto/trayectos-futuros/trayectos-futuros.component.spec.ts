import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectosFuturosComponent } from './trayectos-futuros.component';

describe('TrayectosFuturosComponent', () => {
  let component: TrayectosFuturosComponent;
  let fixture: ComponentFixture<TrayectosFuturosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectosFuturosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectosFuturosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
