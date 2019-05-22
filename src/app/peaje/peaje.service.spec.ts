import { TestBed } from "@angular/core/testing";

import { PeajeService } from "./peaje.service";

describe("PeajeService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: PeajeService = TestBed.get(PeajeService);
    expect(service).toBeTruthy();
  });
});
