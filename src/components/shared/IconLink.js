import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import linkProps from '../../styles/mixins/linkProps';
import spaceChildrenH from '../../styles/mixins/space-children-h';

export default styled(GatsbyLink)`
  ${linkProps};

  ${spaceChildrenH(['0.25ru'])};
`;
