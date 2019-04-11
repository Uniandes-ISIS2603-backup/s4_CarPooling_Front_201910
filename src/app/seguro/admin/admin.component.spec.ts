import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeguroComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminSeguroComponent;
  let fixture: ComponentFixture<AdminSeguroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSeguroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
