import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTrayectoComponent } from './listar-trayecto.component';

describe('ListarTrayectoComponent', () => {
  let component: ListarTrayectoComponent;
  let fixture: ComponentFixture<ListarTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
