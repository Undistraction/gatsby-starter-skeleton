import { api } from 'cssapi'
import styled from 'styled-components'
import defaultBorder from '../../styles/mixins/defaultBorder'
import HorizontalRule from '../HorizontalRule'

const Footnotes = styled.footer`
  ${p => defaultBorder(p.theme.api)};
  ${api({
    borderWidth: `1px 0 0`,
    paddingTop: `1ru`,
  })};

  /* Remark adds an HRule which we don't need so we hide it */
  ${HorizontalRule} {
    display: none;
  }
`

export default Footnotes
