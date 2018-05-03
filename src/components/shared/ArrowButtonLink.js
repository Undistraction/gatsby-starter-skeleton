import styled from 'styled-components'
import api from '../styles/api'
import arrow from '../styles/mixins/arrow'
import Button from '../shared/Button'
import directionBounce from '../styles/animations/directionBounce'

const ArrowButtonLink = styled(Button)`
  display: block;
  ${p => p.direction}: 0;
  ${p => arrow(p.direction, `0.6ru`, `c:black`)};
  ${api({
    padding: `0.4ru 1ru`,
  })};

  &:hover {
    animation: ${({ direction }) =>
      directionBounce(direction)} 0.3s ease-in-out;
  }
`

export default ArrowButtonLink
