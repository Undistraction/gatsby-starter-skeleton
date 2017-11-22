import { merge } from 'ramda';

const OUTPUT_UNIT_PX = 'px';
const OUTPUT_UNIT_REM = 'rem';

const DEFAULTS = {
  unit: 20.8, // 16px * 1.3
  opticalAdjustment: 0.05,
  baseFontSize: 16,
  output: OUTPUT_UNIT_REM,
};

const toRem = (value, baseFontSize) => value / baseFontSize;

const withUnit = (value, output, baseFontSize) => {
  if (output === OUTPUT_UNIT_PX) {
    return `${value}${OUTPUT_UNIT_PX}`;
  }
  return `${toRem(value, baseFontSize)}${OUTPUT_UNIT_REM}`;
};

export default ({ ...params }) => {
  const options = merge(DEFAULTS, params);
  const { unit, opticalAdjustment, output, baseFontSize } = options;
  const verticalUnit = unit - unit * opticalAdjustment;
  const horizontalUnit = unit;

  return {
    vr: (units, outputOverride) =>
      withUnit(units * verticalUnit, outputOverride || output, baseFontSize),
    hr: (units, outputOverride) =>
      withUnit(units * horizontalUnit, outputOverride || output, baseFontSize),
  };
};
