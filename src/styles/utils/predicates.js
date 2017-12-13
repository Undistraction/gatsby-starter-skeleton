import { all, either } from 'ramda';
import { isNumberWithPx, isValidNumber } from 'js-css-units';

// eslint-disable-next-line import/prefer-default-export
export const allAreNumbersOrPixelValues = all(
  either(isValidNumber, isNumberWithPx)
);
