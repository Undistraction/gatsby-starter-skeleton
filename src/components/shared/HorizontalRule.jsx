import { api } from 'cssapi'
import styled from 'styled-components'
import defaultBorder from '../styles/mixins/defaultBorder'

const HorizontalRule = styled.hr`
  border: none;
  position: relative;
  margin-bottom: 0;
  ${api({
    borderWidth: `1px 0 0`,
  })};
  ${p => defaultBorder(p.theme.api)};
`
export default HorizontalRule
