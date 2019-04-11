import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPeajeComponent } from './admin.component';

describe('AdminPeajeComponent', () => {
  let component: AdminPeajeComponent;
  let fixture: ComponentFixture<AdminPeajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPeajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPeajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
