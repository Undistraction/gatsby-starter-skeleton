import styled from 'styled-components';
import flexVertical from '../../../styles/mixins/flexVertical';
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV';

export default styled.div`
  ${flexVertical};
  ${spaceChildrenV('1ru')};
  align-items: center;
  width: 100%;
  padding: 4rem 0;
`;
