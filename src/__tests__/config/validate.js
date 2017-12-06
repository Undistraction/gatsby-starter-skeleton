import config from '../../config';
import validate from '../../config/validate';

describe('validator', () => {
  it('validates default config without error', () => {
    expect(() => validate(config)).not.toThrowError();
  });

  it('returns the validated config', () => {
    expect(validate(config)).not.toBeUndefined();
  });
});
