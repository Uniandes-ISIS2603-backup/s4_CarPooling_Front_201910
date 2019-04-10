import { TestBed } from '@angular/core/testing';

import { SeguroServiceService } from './seguro-service.service';

describe('SeguroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeguroServiceService = TestBed.get(SeguroServiceService);
    expect(service).toBeTruthy();
  });
});
