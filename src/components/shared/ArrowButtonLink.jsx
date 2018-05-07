import { api } from 'cssapi'
import React from 'react'
import styled from 'styled-components'
import Button from '../shared/Button'
import directionBounce from '../styles/animations/directionBounce'
import arrow from '../styles/mixins/arrow'
import singleLineTruncate from '../styles/mixins/singleLineTruncate'

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  ${p => p.direction}: 0;
  ${p => arrow(p.direction, `0.6ru`, `g:backgroundInverted`)};

  &:hover {
    animation: ${({ direction }) =>
      directionBounce(direction)} 0.3s ease-in-out;
  }
`

const Link = styled(Button)`
  display: block;
  ${singleLineTruncate};

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
