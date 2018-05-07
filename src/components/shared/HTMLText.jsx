import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import RehypeReact from 'rehype-react'
import styled from 'styled-components'
import dropCap from '../styles/mixins/dropCap'
import BlockQuote from './BlockQuote'
import HorizontalRule from './HorizontalRule'
import OrderedList from './OrderedList'
import TextLink from './TextLink'
import TitleSecondary from './TitleSecondary'
import TitleTertiary from './TitleTertiary'
import UnorderedList from './UnorderedList'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h2: TitleSecondary,
    h3: TitleTertiary,
    ul: UnorderedList,
    ol: OrderedList,
    blockquote: BlockQuote,
    a: TextLink,
    hr: HorizontalRule,
  },
}).Compiler

const PageText = styled.div`
  div > p:first-of-type {
    font-weight: bold;
    ${api({
      baseline: scope`s:lede`,
    })};
  }

  div > * + * {
    ${api({
      marginTop: `1ru`,
    })};
  }

  div > p:first-of-type:first-letter {
    ${dropCap(api)};
  }

  .footnote-backref {
    display: none;
  }

  .footnote-ref {
    /* Target using sup element */
  }
`

const HTMLText = ({ htmlAst }) => <PageText>{renderAst(htmlAst)}</PageText>

HTMLText.propTypes = {
  htmlAst: PropTypes.string.isRequired,
}

export default HTMLText
