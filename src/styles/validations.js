import { unless } from 'ramda';
import { isNumber } from 'ramda-adjunct/lib/index';
import { allAreNumbersOrPixelValues } from './utils/predicates';
import { throwInvalidValueError } from './errors';

// eslint-disable-next-line import/prefer-default-export
export const validatePxValues = unless(
  allAreNumbersOrPixelValues,
  throwInvalidValueError
);

export const validatePxValuesAllowZero = unless(
  allAreNumbersOrPixelValues,
  throwInvalidValueError
);

export const validateNumber = unless(isNumber, throwInvalidValueError);
