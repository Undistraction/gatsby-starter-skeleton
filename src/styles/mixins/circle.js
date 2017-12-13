import { css } from 'styled-components';

export default (diameter, background) => css`
    border-radius: 50%;
    width: ${diameter};
    height: ${diameter};
    background: ${background};
  `;

