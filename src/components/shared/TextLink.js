import Link from 'gatsby-link'
import styled from 'styled-components'
import linkProps from '../../styles/mixins/linkProps'

const TextLink = styled(Link)`
  position: relative;
  ${linkProps('c:black', 'c:highlight')};
`

export default TextLink
