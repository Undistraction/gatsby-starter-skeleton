import { multiply, compose } from 'ramda';

import { validatePxValues, validateNumber } from '../validations';
import { toUnitlessValue } from '../utils/units';

export default (rhythmUnit, output) => {
  validatePxValues([rhythmUnit]);
  const rhythmUnitInUnitlessPx = toUnitlessValue(rhythmUnit);
  return {
    vertical: valueInUnitlessPx => {
      validateNumber(valueInUnitlessPx);
      return compose(output, multiply(rhythmUnitInUnitlessPx))(
        valueInUnitlessPx
      );
    },

    horizontal: valueInUnitlessPx => {
      validateNumber(valueInUnitlessPx);
      return compose(output, multiply(rhythmUnitInUnitlessPx))(
        valueInUnitlessPx
      );
    },
  };
};
