import units from '../../../styles/api/units';
import { invalidPixelValues, validPixelValues } from '../../data';

describe('units', () => {
  describe('configuration', () => {
    for (const value of invalidPixelValues) {
      it(`throws with invalid value of '${value}'`, () => {
        expect(() => units(value)).toThrow();
      });
    }

    for (const value of validPixelValues) {
      it(`doesn't throw with valid value of '${value}'`, () => {
        expect(() => units(value)).not.toThrow();
      });
    }
  });

  describe('pxToRem', () => {
    for (const value of invalidPixelValues) {
      it(`throws with invalid value of '${value}'`, () => {
        const configuredUnits = units(16);
        expect(() => configuredUnits.pxToRem(value)).toThrow();
      });
    }

    for (const value of validPixelValues) {
      it(`doesn't throw with valid value of '${value}'`, () => {
        const configuredUnits = units(16);
        expect(() => configuredUnits.pxToRem(value)).not.toThrow();
      });
    }

    it('converts unitless values from pixels to rems', () => {
      const configuredUnits = units(16);
      expect(configuredUnits.pxToRem(16)).toBe('1rem');
      expect(configuredUnits.pxToRem(12)).toBe('0.75rem');
      expect(configuredUnits.pxToRem(0)).toBe('0rem');
    });

    it('converts united values from pixels to rems', () => {
      const configuredUnits = units(16);
      expect(configuredUnits.pxToRem('16px')).toBe('1rem');
      expect(configuredUnits.pxToRem('12px')).toBe('0.75rem');
      expect(configuredUnits.pxToRem('0px')).toBe('0rem');
    });
  });
});
