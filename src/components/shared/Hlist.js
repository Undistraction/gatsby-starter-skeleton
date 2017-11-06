import styled from 'styled-components';
import flexHorizontal from '../../styles/mixins/flex-horizontal';
import uiList from '../../styles/mixins/ui-list';
import spaceChildrenH from '../../styles/mixins/spaceChildrenH';

export default styled.ol`
  ${flexHorizontal};
  ${uiList};
  ${spaceChildrenH('15px')};
`;
