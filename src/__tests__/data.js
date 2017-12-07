export const invalidPixelValues = [
  '5rem',
  '5em',
  '5vh',
  '5vw',
  null,
  undefined,
  NaN,
  false,
  true,
  {},
  [],
];

export const validPixelValues = [0, 5, 5.5, '0px', '5px', '5.5px'];

export const invalidNumbers = [
  'xxx',
  null,
  undefined,
  NaN,
  false,
  true,
  {},
  [],
];

export const validNumbers = [-5 - 5.5, 0, 5, 5.5];
