import {
  compose,
  divide,
  join,
  none,
  complement,
  isNil,
  when,
  map,
  reverse,
} from 'ramda';

import { UNITS } from '../const';

import { isNumberWithPx } from './predicates';

// const toList = unapply(identity);

const elementsOfUnitedNumber = value => {
  const captures = /^(-?\d+(?:.\d+)?)([a-z]+)?$/.exec(value);
  if (none(complement(isNil), [captures, captures[1], captures[2]])) {
    throw new Error(`You can't get the numeric portion of '${value}'`);
  }
  return [Number(captures[1]), captures[2]];
};

const unitedDimensionToUnitlessPixelValue = value => {
  const [number] = elementsOfUnitedNumber(value);
  return number;
};

const appendUnit = join('');

export const toUnitlessValue = when(
  isNumberWithPx,
  unitedDimensionToUnitlessPixelValue
);
export const toUnitlessValues = compose(reverse, map(toUnitlessValue));

export const appendRem = value => appendUnit([value, UNITS.REM]);

export const pxToRemEm = divide;
