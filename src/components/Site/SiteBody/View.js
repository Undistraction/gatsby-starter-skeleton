import styled from 'styled-components';
import blockCenterH from '../../../styles/mixins/block-center-h';

export default styled.div`
  ${blockCenterH};
  width: 50%;
  ${props =>
    props.theme.api({
      padding: ['10ru'],
    })};
`;
