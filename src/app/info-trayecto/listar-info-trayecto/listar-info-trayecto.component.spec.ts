import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInfoTrayectoComponent } from './listar-info-trayecto.component';

describe('ListarInfoTrayectoComponent', () => {
  let component: ListarInfoTrayectoComponent;
  let fixture: ComponentFixture<ListarInfoTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarInfoTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInfoTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
