import styled from 'styled-components';

export default styled.h2`
  ${p =>
    p.theme.api({
      baseline: ['s:secondaryTitle'],
    })};
`;
