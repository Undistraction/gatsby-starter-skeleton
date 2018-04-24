import styled from 'styled-components';
import flexVertical from '../../styles/mixins/flex-vertical';

export const LayoutHeader = styled.div``;
export const LayoutBody = styled.div``;

export default styled.div`
  ${flexVertical};

  ${LayoutHeader} {
    ${p =>
      p.theme.api({
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
