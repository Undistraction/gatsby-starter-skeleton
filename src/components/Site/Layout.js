import styled from 'styled-components';
import flexVertical from '../../styles/mixins/flex-vertical';
import blockCenterH from '../../styles/mixins/block-center-h';

export const LayoutHeader = styled.div``;
export const LayoutBody = styled.div``;
export const LayoutFooter = styled.div``;

export default styled.div`
  ${flexVertical};
  ${blockCenterH};
  height: 100%;

  ${LayoutBody} {
    flex: 1 0 auto;
  }
`;
