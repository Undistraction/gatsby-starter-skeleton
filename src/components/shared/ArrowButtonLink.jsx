import styled from 'styled-components'
import React from 'react'
import api from '../styles/api'
import arrow from '../styles/mixins/arrow'
import Button from '../shared/Button'
import directionBounce from '../styles/animations/directionBounce'

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  ${p => p.direction}: 0;
  ${p => arrow(p.direction, `0.6ru`, `c:black`)};

  &:hover {
    animation: ${({ direction }) =>
      directionBounce(direction)} 0.3s ease-in-out;
  }
`

const Link = styled(Button)`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${api({
    padding: `0.4ru 1ru`,
  })};
`

const ArrowButtonLink = props => (
  <Wrapper {...props}>
    <Link {...props} />
  </Wrapper>
)

export default ArrowButtonLink
