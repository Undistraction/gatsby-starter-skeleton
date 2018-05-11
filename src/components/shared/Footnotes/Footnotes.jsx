import { api, scope } from 'cssapi'
import styled from 'styled-components'
import defaultBorder from '../../styles/mixins/defaultBorder'
import HorizontalRule from '../HorizontalRule'

const Footnotes = styled.footer`
  ${defaultBorder()};
  ${api({
    paddingTop: scope`1ru`,
  })};

  /* Remark adds an HRule which we don't need so we hide it */
  ${HorizontalRule} {
    display: none;
  }
`

export default Footnotes
