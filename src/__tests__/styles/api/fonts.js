import fonts from '../../../styles/api/fonts';

describe('fonts', () => {
  it('errors if no font map is supplied', () => {
    expect(() => fonts()).toThrowErrorMatchingSnapshot();
  });
});
