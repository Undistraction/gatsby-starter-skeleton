import rhythm from '../../../styles/api/rhythm';
import units from '../../../styles/api/units';
import {
  invalidPixelValues,
  validPixelValues,
  validNumbers,
  invalidNumbers,
} from '../../data';

describe('rhythm', () => {
  describe('configuration', () => {
    for (const value of invalidPixelValues) {
      it(`thows if the value is '${value}'`, () => {
        expect(() => rhythm(value)).toThrow();
      });
    }

    for (const value of validPixelValues) {
      it(`doesn't throw if the value is '${value}'`, () => {
        expect(() => rhythm(value)).not.toThrow();
      });
    }
  });

  describe('horizontal', () => {
    for (const value of invalidNumbers) {
      const { pxToRem } = units(16);
      const configuredRhythm = rhythm(16, pxToRem);
      it(`thows if the value is '${value}'`, () => {
        expect(() => configuredRhythm.horizontal(value)).toThrow();
      });
    }

    for (const value of validNumbers) {
      const { pxToRem } = units(16);
      const configuredRhythm = rhythm(16, pxToRem);
      it(`doesn't throw if the value is '${value}'`, () => {
        expect(() => configuredRhythm.horizontal(value)).not.toThrow();
      });
    }

    it('outputs the correct value with an identical baseFontSize and unit', () => {
      const { pxToRem } = units(16);
      const configuredRhythm = rhythm(16, pxToRem);
      expect(configuredRhythm.horizontal(0.5)).toEqual('0.5rem');
      expect(configuredRhythm.horizontal(1)).toEqual('1rem');
    });

    it('outputs the correct value with different baseFontSize and unit', () => {
      const { pxToRem } = units(16);
      const configuredRhythm = rhythm(21, pxToRem);
      expect(configuredRhythm.horizontal(0.5)).toEqual('0.65625rem');
      expect(configuredRhythm.horizontal(1)).toEqual('1.3125rem');
    });
  });

  describe('vertical', () => {
    for (const value of invalidNumbers) {
      const { pxToRem } = units(16);
      const configuredRhythm = rhythm(16, pxToRem);
      it(`thows if the value is '${value}'`, () => {
        expect(() => configuredRhythm.vertical(value)).toThrow();
      });
    }

    for (const value of validNumbers) {
      const { pxToRem } = units(16);
      const configuredRhythm = rhythm(16, pxToRem);
      it(`doesn't throw if the value is '${value}'`, () => {
        expect(() => configuredRhythm.vertical(value)).not.toThrow();
      });
    }

    it('outputs the correct value with an identical baseFontSize and unit', () => {
      const { pxToRem } = units(16);
      const configuredRhythm = rhythm(16, pxToRem);
      expect(configuredRhythm.vertical(0.5)).toEqual('0.5rem');
      expect(configuredRhythm.vertical(1)).toEqual('1rem');
    });

    it('outputs the correct value with different baseFontSize and unit', () => {
      const { pxToRem } = units(16);
      const configuredRhythm = rhythm(21, pxToRem);
      expect(configuredRhythm.vertical(0.5)).toEqual('0.65625rem');
      expect(configuredRhythm.vertical(1)).toEqual('1.3125rem');
    });
  });
});
