import { InfoTrayectoModule } from './info-trayecto.module';

describe('InfoTrayectoModule', () => {
  let infoTrayectoModule: InfoTrayectoModule;

  beforeEach(() => {
    infoTrayectoModule = new InfoTrayectoModule();
  });

  it('should create an instance', () => {
    expect(infoTrayectoModule).toBeTruthy();
  });
});
