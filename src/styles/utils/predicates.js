import { both, curry, join, all, either, gt, __ } from 'ramda';
import { isNumber } from 'ramda-adjunct/lib/index';
import { UNITS } from '../const';

export const isNumberWithUnit = curry((units, value) => {
  const regex = `^-?\\d+(?:.\\d+)?(?:${join('|', units)})$`;
  return new RegExp(regex).test(value);
});

export const isNumberWithPx = isNumberWithUnit([UNITS.PX]);
export const allAreNumbersOrPixelValues = all(either(isNumber, isNumberWithPx));
export const isPositiveNumber = both(isNumber, gt(__, 0));
