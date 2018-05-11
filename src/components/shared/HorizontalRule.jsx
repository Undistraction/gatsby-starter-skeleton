import styled from 'styled-components'
import defaultBorder from '../styles/mixins/defaultBorder'

const HorizontalRule = styled.hr`
  border: none;
  position: relative;
  margin-bottom: 0;
  ${defaultBorder()};
`
export default HorizontalRule
