import styled from 'styled-components';
import flexVertical from '../../styles/mixins/flex-vertical';
import blockCenterH from '../../styles/mixins/block-center-h';
import api from '../../styles/api';

export const LayoutHeader = styled.div``;
export const LayoutBody = styled.div``;
export const LayoutFooter = styled.div``;

export default styled.div`
  ${flexVertical};
  ${blockCenterH};

  ${api({
    minHeight: ['100vu'],
    maxWidth: [1100],
  })} ${LayoutHeader} {
    flex: 0 0 auto;
  }

  ${LayoutBody} {
    flex: 2 0 auto;
  }

  ${LayoutFooter} {
    flex: 0 0 auto;
  }
`;
