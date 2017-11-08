import styled from 'styled-components';
import flexVertical from '../../styles/mixins/flex-vertical';

export const LayoutHeader = styled.div``;
export const LayoutBody = styled.div``;

export default styled.div`
  ${flexVertical};
  height: 100%;

  ${LayoutHeader} {
    flex: 0 0 auto;
  }

  ${LayoutBody} {
    flex: 1 0 auto;
  }
`;
