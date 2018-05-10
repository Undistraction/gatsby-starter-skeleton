import { api } from 'cssapi'
import React from 'react'
import styled from 'styled-components'
import directionBounce from '../../styles/animations/directionBounce'
import arrow from '../../styles/mixins/arrow'
import singleLineTruncate from '../../styles/mixins/singleLineTruncate'
import Button from './ButtonLink'

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  ${p => p.direction}: 0;
  ${p => arrow(p.theme.api, p.direction, `0.6ru`, `g:backgroundInverted`)};

  &:hover {
    animation: ${({ direction }) =>
      directionBounce(direction)} 0.3s ease-in-out;
  }
`

const Link = styled(Button)`
  display: block;
  ${singleLineTruncate};

  ${api({
    padding: `0.5ru 1ru`,
  })};
`

const ArrowButtonLink = props => (
  <Wrapper {...props}>
    <Link {...props} />
  </Wrapper>
)

export default ArrowButtonLink
