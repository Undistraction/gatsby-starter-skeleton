import styled, { css } from 'styled-components';

const stylesForDirection = (direction = 'horizontal') => {
  if (direction === 'horizontal') {
    return css`
      flex-direction: row;
    `;
  }
  return css`
    flex-direction: column;
  `;
};

export default styled.div`
  display: flex;
  ${props => stylesForDirection(props.vertical || props.horizontal)};
  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `};
  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `};
`;
