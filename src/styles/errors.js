// eslint-disable-next-line import/prefer-default-export
export const throwInvalidValueError = values => {
  throw new Error(`Supplied values were not valid: ${values}`);
};
