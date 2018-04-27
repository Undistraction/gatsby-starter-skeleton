import styled from 'styled-components';
import blockCenterH from '../../../styles/mixins/blockCenterH';
import api from '../../../styles/api';

export default styled.div`
  ${blockCenterH};
  width: 100%;
  ${api({
    padding: ['2ru'],
  })};
`;
