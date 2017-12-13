import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import linkProps from '../../styles/mixins/linkProps';

export default styled(GatsbyLink)`
  ${linkProps};

  &: hover {
    text-decoration: none;
  }

  > div {
    margin-right: 4px;
  }
`;
