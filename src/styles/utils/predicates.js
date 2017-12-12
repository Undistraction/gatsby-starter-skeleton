import { all, either } from 'ramda';
import { isNumber } from 'ramda-adjunct';
import { isNumberWithPx } from 'js-css-units';

// eslint-disable-next-line import/prefer-default-export
export const allAreNumbersOrPixelValues = all(either(isNumber, isNumberWithPx));
