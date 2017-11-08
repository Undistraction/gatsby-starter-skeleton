import styled from 'styled-components';
import flexHorizontal from '../../styles/mixins/flex-horizontal';

export const LayoutPrevious = styled.div``;

export const LayoutNext = styled.div``;

export default styled.nav`
  ${flexHorizontal};

  ${LayoutNext} {
    margin-left: auto;
  }

  ${LayoutPrevious} {
    margin-right: auto;
  }

  ${LayoutNext}, ${LayoutPrevious} {
    flex: 0 0 auto;
  }
`;
