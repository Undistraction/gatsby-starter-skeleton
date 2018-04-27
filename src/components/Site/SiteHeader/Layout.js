import styled from 'styled-components';
import flexVertical from '../../../styles/mixins/flex-vertical';
import spaceChildrenV from '../../../styles/mixins/space-children-v';

export default styled.div`
  ${flexVertical};
  ${spaceChildrenV('1ru')};
  align-items: center;
  width: 100%;
  padding: 4rem 0;
`;
