import { TestBed } from '@angular/core/testing';

import { PeajeServiceService } from './peaje-service.service';

describe('PeajeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeajeServiceService = TestBed.get(PeajeServiceService);
    expect(service).toBeTruthy();
  });
});
