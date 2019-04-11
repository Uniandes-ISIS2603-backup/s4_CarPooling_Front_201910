import { TestBed } from '@angular/core/testing';

import { InfoTrayectoService } from './info-trayecto.service';

describe('InfoTrayectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoTrayectoService = TestBed.get(InfoTrayectoService);
    expect(service).toBeTruthy();
  });
});
