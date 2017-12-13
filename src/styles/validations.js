import { unless } from 'ramda';
import { isValidNumber } from 'js-css-units';
import { allAreNumbersOrPixelValues } from './utils/predicates';
import { composeError, invalidValueErrorMessage } from './errors';

// eslint-disable-next-line import/prefer-default-export
export const validatePxValues = unless(
  allAreNumbersOrPixelValues,
  composeError(invalidValueErrorMessage)
);

export const validatePxValuesAllowZero = unless(
  allAreNumbersOrPixelValues,
  composeError(invalidValueErrorMessage)
);

export const validateNumber = unless(
  isValidNumber,
  composeError(invalidValueErrorMessage)
);
