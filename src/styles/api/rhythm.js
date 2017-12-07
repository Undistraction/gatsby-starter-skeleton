import { multiply, compose } from 'ramda';

import { validatePxValues, validateNumber } from '../validations';
import { toUnitlessValue } from '../utils/units';

// const DEFAULT_CONFIG = {
//   rhythmUnit: 20.8, // 16px * 1.3
//   opticalAdjustment: 0.05,
// };

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
