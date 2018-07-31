import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import { both, filter, lensPath, pipe, test } from 'ramda'
import { isNotEmpty, isPlainObj, lensSatisfies } from 'ramda-adjunct'
import React from 'react'
import RehypeReact from 'rehype-react'
import styled, { withTheme } from 'styled-components'
import spaceChildrenV from '../styles/mixins/spaceChildrenV'
import Blockquote from './Blockquote'
import Cite from './Cite'
import FootnoteRef from './Footnotes/FootnoteRef'
import Footnotes from './Footnotes/Footnotes'
import HorizontalRule from './HorizontalRule'
import Table from './Table'
import ContentLink from './links/ContentLink'
import OrderedList from './lists/OrderedList'
import UnorderedList from './lists/UnorderedList'
import ContentTitlePrimary from './titles/ContentTitlePrimary'
import ContentTitleSecondary from './titles/ContentTitleSecondary'
import ContentTitleTertiary from './titles/ContentTitleTertiary'

const hrefIsBackref = test(/^#fnref/)
const isClassedAsFootnoteRef = test(/footnote-ref/)
const isClassedAsFootnotes = test(/footnotes/)
const idIsFootnote = test(/^fn-/)
const lhasIdProp = lensSatisfies(idIsFootnote, lensPath([`props`, `id`]))
const isListOfFootnotes = pipe(
  filter(both(isPlainObj, lhasIdProp)),
  isNotEmpty
)

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

const resolveOl = theme => ({ children }) => (
  <OrderedList
    theme={theme}
    size={isListOfFootnotes(children) ? `small` : `default`}
  >
    {children}
  </OrderedList>
)
/* eslint-enable react/display-name, react/prop-types */

const renderAst = (theme, ast) =>
  new RehypeReact({
    createElement: React.createElement,
    components: {
      h1: ContentTitlePrimary,
      h2: ContentTitleSecondary,
      h3: ContentTitleTertiary,
      ol: resolveOl(theme),
      ul: UnorderedList,
      blockquote: Blockquote,
      cite: Cite,
      a: resolveAnchor(theme),
      hr: HorizontalRule,
      div: resolveDiv(theme),
      table: Table,
    },
  }).Compiler(ast)

const PageText = styled.div`
  div {
    ${spaceChildrenV(scope`1ru`)};
  }

  div > p:first-of-type {
    font-weight: bold;

    ${api({
      baseline: scope`s:lede`,
    })};
  }

  ${Blockquote}, ${OrderedList}, ${UnorderedList} {
    ${api({
      marginH: scope`1ru`,
    })};
  }
`
const MarkdownContent = ({ htmlAst, theme }) => (
  <PageText>{renderAst(theme, htmlAst)}</PageText>
)
MarkdownContent.propTypes = {
  htmlAst: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withTheme(MarkdownContent)
