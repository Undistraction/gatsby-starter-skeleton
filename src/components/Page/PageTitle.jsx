import styled from 'styled-components';

export default styled.h1`
  ${p =>
    p.theme.api({
      baseline: ['s:primaryTitle'],
    })};
`;
