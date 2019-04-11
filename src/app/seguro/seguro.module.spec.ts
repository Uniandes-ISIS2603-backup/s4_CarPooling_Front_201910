import { SeguroModule } from './seguro.module';

describe('SeguroModule', () => {
  let seguroModule: SeguroModule;

  beforeEach(() => {
    seguroModule = new SeguroModule();
  });

  it('should create an instance', () => {
    expect(seguroModule).toBeTruthy();
  });
});
