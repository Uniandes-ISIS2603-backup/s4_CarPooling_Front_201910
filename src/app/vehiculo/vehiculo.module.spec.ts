import { VehiculoModule } from './alquiler.module';

describe('VehiculoModule', () => {
  let alquilerModule: VehiculoModule;

  beforeEach(() => {
    vehiculoModule = new VehiculoModule();
  });

  it('should create an instance', () => {
    expect(vehiculoModule).toBeTruthy();
  });
});
