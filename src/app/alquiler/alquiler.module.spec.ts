import { AlquilerModule } from './alquiler.module';

describe('AlquilerModule', () => {
  let alquilerModule: AlquilerModule;

  beforeEach(() => {
    alquilerModule = new AlquilerModule();
  });

  it('should create an instance', () => {
    expect(alquilerModule).toBeTruthy();
  });
});
