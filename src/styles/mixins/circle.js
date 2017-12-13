import { css } from 'styled-components';

export default (diameter, background) => {
  console.log('=>', diameter, background);
  return css`
    border-radius: 50%;
    width: ${diameter};
    height: ${diameter};
    background: ${background};
  `;
};
