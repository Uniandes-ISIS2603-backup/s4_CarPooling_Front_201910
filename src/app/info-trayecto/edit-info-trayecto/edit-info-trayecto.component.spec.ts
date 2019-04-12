import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoTrayectoComponent } from './edit-info-trayecto.component';

describe('EditInfoTrayectoComponent', () => {
  let component: EditInfoTrayectoComponent;
  let fixture: ComponentFixture<EditInfoTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInfoTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfoTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
