import styled from 'styled-components';
import flexHorizontal from '../../styles/mixins/flex-horizontal';
import uiList from '../../styles/mixins/ui-list';
import spaceChildrenH from '../../styles/mixins/space-children-h';

export default styled.ul`
  ${flexHorizontal};
  ${uiList};
  ${spaceChildrenH('1ru')};
`;
