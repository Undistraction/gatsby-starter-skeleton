import styled from 'styled-components';
import blockCenterH from '../../../styles/mixins/block-center-h';
import api from '../../../styles/api';

export default styled.footer`
  text-align: center;
  ${blockCenterH};

  p {
    ${api({
      margin: ['0 auto 1ru'],
    })};
  }

  ${api({
    paddingV: ['4ru'],
  })};
`;
