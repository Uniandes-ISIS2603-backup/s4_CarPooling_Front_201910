import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeajeComponent } from './listar-peaje.component';

describe('ListarPeajeComponent', () => {
  let component: ListarPeajeComponent;
  let fixture: ComponentFixture<ListarPeajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPeajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
