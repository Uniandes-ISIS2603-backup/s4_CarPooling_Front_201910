import { TrayectoModule } from './trayecto.module';

describe('TrayectoModule', () => {
  let trayectoModule: TrayectoModule;

  beforeEach(() => {
    trayectoModule = new TrayectoModule();
  });

  it('should create an instance', () => {
    expect(trayectoModule).toBeTruthy();
  });
});
