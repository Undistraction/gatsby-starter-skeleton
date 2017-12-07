import { both, is, complement, curry, join, all, either, gt, __ } from 'ramda';
import { UNITS } from '../const';

export const isNumberWithUnit = curry((units, value) => {
  const regex = `^-?\\d+(?:.\\d+)?(?:${join('|', units)})$`;
  return new RegExp(regex).test(value);
});

export const isNumberWithPx = isNumberWithUnit([UNITS.PX]);
export const isNumber = both(is(Number), complement(Number.isNaN));
export const allAreNumbersOrPixelValues = all(either(isNumber, isNumberWithPx));
export const isPositiveNumber = both(isNumber, gt(__, 0));
