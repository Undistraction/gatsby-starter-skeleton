import styled from 'styled-components';
import flexVertical from '../../styles/mixins/flex-vertical';
import WIDTH_BREAKPOINTS from '../../styles/themes/breakpoints';

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

    ${props => props.theme.mq.aboveWidth(WIDTH_BREAKPOINTS.MEDIUM)`
      background-color: green;

  `};
  }
`;
