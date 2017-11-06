import styled, { css } from 'styled-components';

const stylesForGrow = (grow = 0) =>
  css`
    flex-grow: ${grow};
  `;

export default styled.div`
  flex-shrink: 0;
  flex-basis: auto;
  ${props => stylesForGrow(props.grow)};
`;
