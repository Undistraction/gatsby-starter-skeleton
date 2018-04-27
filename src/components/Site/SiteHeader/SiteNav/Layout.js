import styled from 'styled-components';
import flexHorizontal from '../../../../styles/mixins/flexHorizontal';
import uiList from '../../../../styles/mixins/uiList';
import spaceChildrenH from '../../../../styles/mixins/spaceChildrenH';

export default styled.nav`
  ${flexHorizontal};
  ${uiList};
  ${spaceChildrenH('1ru')};
`;
