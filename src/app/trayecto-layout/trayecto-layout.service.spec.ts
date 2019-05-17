import { TestBed } from '@angular/core/testing';

import { TrayectoLayoutService } from './trayecto-layout.service';

describe('TrayectoLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrayectoLayoutService = TestBed.get(TrayectoLayoutService);
    expect(service).toBeTruthy();
  });
});
