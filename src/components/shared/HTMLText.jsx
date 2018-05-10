import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import { test } from 'ramda'
import React from 'react'
import RehypeReact from 'rehype-react'
import styled, { withTheme } from 'styled-components'
import dropCap from '../styles/mixins/dropCap'
import spaceChildrenV from '../styles/mixins/spaceChildrenV'
import Blockquote from './Blockquote'
import FootnoteRef from './Footnotes/FootnoteRef'
import Footnotes from './Footnotes/Footnotes'
import HorizontalRule from './HorizontalRule'
import ContentLink from './links/ContentLink'
import OrderedList from './lists/OrderedList'
import UnorderedList from './lists/UnorderedList'
import ContentTitlePrimary from './titles/ContentTitlePrimary'
import ContentTitleSecondary from './titles/ContentTitleSecondary'
import ContentTitleTertiary from './titles/ContentTitleTertiary'

const hrefIsBackref = test(/^#fnref/)
const isClassedAsFootnoteRef = test(/footnote-ref/)
const isClassedAsFootnotes = test(/footnotes/)

/* eslint-disable react/display-name, react/prop-types */
const resolveAnchor = theme => ({ className, href, ...rest }) => {
  let Component

  if (isClassedAsFootnoteRef(className)) {
    Component = FootnoteRef
  }

  if (hrefIsBackref(href)) {
    return null
  }

  Component = Component || ContentLink

  return <Component {...rest} theme={theme} href={href} />
}

const resolveDiv = theme => ({ className, ...rest }) => {
  if (isClassedAsFootnotes(className)) {
    return <Footnotes {...rest} theme={theme} />
  }
  return <div className={className} {...rest} />
}
/* eslint-enable react/display-name, react/prop-types */

const renderAst = (theme, ast) =>
  new RehypeReact({
    createElement: React.createElement,
    components: {
      h1: ContentTitlePrimary,
      h2: ContentTitleSecondary,
      h3: ContentTitleTertiary,
      ul: UnorderedList,
      ol: OrderedList,
      blockquote: Blockquote,
      a: resolveAnchor(theme),
      hr: HorizontalRule,
      div: resolveDiv(theme),
    },
  }).Compiler(ast)

const PageText = styled.div`
  div > p:first-of-type {
    font-weight: bold;
    ${api({
      baseline: scope`s:lede`,
    })};
  }

  div {
    ${spaceChildrenV(`1ru`)};
  }

  div > p:first-of-type:first-letter {
    ${dropCap(api)};
  }

  ${Blockquote}, ${OrderedList}, ${UnorderedList} {
    ${api({
      marginH: `1ru`,
    })};
  }
`

const HTMLText = ({ htmlAst, theme }) => (
  <PageText>{renderAst(theme, htmlAst)}</PageText>
)
HTMLText.propTypes = {
  htmlAst: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withTheme(HTMLText)
