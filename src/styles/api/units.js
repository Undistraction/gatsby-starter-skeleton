import { compose, curry } from 'ramda';
import { toUnitlessValues, appendRem, pxToRemEm } from '../utils/units';
import { validatePxValues } from '../validations';

const pxToRemWithUnit = (baseFontSizeInPx, sizeInPx) => {
  validatePxValues([sizeInPx]);
  const unitlessValues = toUnitlessValues([baseFontSizeInPx, sizeInPx]);
  return compose(appendRem, pxToRemEm)(...unitlessValues);
};

export default baseFontSizeInPx => {
  validatePxValues([baseFontSizeInPx]);
  return {
    pxToRem: curry(pxToRemWithUnit)(baseFontSizeInPx),
  };
};
