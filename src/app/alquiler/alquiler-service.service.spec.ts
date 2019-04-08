import { TestBed } from '@angular/core/testing';

import { AlquilerServiceService } from './alquiler-service.service';

describe('AlquilerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlquilerServiceService = TestBed.get(AlquilerServiceService);
    expect(service).toBeTruthy();
  });
});
