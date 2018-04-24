import styled from 'styled-components';
import flexVertical from '../../styles/mixins/flex-vertical';
import api from '../../styles/api';

export const LayoutHeader = styled.div``;
export const LayoutBody = styled.div``;

export default styled.div`
  ${flexVertical};

  ${LayoutHeader} {
    ${api({
      flex: ['0 0 auto'],
      marginBottom: ['0.5ru'],
      textAlign: ['center'],
    })};
  }

  ${LayoutBody} {
    flex: 1 0 auto;
  }
`;

// ${props => props.theme.qs.aboveMediumWidth`
// background-color: ${props.theme.bg};
// `};
