import styled from 'styled-components';
import blockCenterH from '../../../styles/mixins/block-center-h';

export default styled.div`
  ${blockCenterH};
  width: 100%;
  ${props =>
    props.theme.api({
      padding: ['2ru'],
    })};
`;
