import styled from 'styled-components'
import api from '../../styles/api'
import arrow from '../../styles/mixins/arrow'
import Button from '../shared/Button'

const ArrowButtonLink = styled(Button)`
  display: block;
  ${p => arrow(p.direction, '0.6ru', 'c:black')};
  ${api({
    padding: '0.4ru 1ru',
  })};
`

export default ArrowButtonLink
