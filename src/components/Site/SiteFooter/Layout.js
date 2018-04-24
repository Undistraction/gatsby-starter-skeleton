import styled from 'styled-components';
import blockCenterH from '../../../styles/mixins/block-center-h';

export default styled.footer`
  text-align: center;
  ${blockCenterH};

  p {
    ${p =>
      p.theme.api({
        margin: ['0 auto 1ru'],
      })};
  }

  ${p =>
    p.theme.api({
      paddingV: ['4ru'],
    })};
`;
