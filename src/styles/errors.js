import { compose } from 'ramda';

// eslint-disable-next-line import/prefer-default-export
export const invalidValueErrorMessage = values =>
  `Supplied values were not valid: ${values}`;

export const invalidFontMapErrorMessage = value =>
  `You must supply a valid font map, but you supplied '${value}'`;

export const throwError = message => {
  throw new Error(message);
};

export const composeError = message => compose(throwError, message);
