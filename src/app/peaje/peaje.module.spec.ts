import { PeajeModule } from './peaje.module';

describe('PeajeModule', () => {
  let peajeModule: PeajeModule;

  beforeEach(() => {
    peajeModule = new PeajeModule();
  });

  it('should create an instance', () => {
    expect(peajeModule).toBeTruthy();
  });
});
