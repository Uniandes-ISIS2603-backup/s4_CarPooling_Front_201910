import { TrayectoLayoutModule } from './trayecto-layout.module';

describe('TrayectoLayoutModule', () => {
  let trayectoLayoutModule: TrayectoLayoutModule;

  beforeEach(() => {
    trayectoLayoutModule = new TrayectoLayoutModule();
  });

  it('should create an instance', () => {
    expect(trayectoLayoutModule).toBeTruthy();
  });
});
