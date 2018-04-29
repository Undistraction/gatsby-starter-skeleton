import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import ArrowButtonLink from '../shared/ArrowButtonLink'

export const LayoutPrevious = styled.div``
export const LayoutNext = styled.div``

const Layout = styled.nav`
  ${flexHorizontal};

  ${LayoutNext} {
    margin-left: auto;
  }

  ${LayoutPrevious} {
    margin-right: auto;
  }

  ${LayoutNext}, ${LayoutPrevious} {
    flex: 0 0 auto;
  }
`

const previousPathLink = previousPath => {
  if (previousPath) {
    return (
      <ArrowButtonLink to={previousPath} direction="left">
        Previous
      </ArrowButtonLink>
    )
  }
  return ''
}

const nextPathLink = nextPath => {
  if (nextPath) {
    return (
      <ArrowButtonLink to={nextPath} direction="right">
        Next
      </ArrowButtonLink>
    )
  }
  return ''
}

const ArticlesNav = ({ previousPath, nextPath }) => (
  <Layout>
    <LayoutPrevious>{previousPathLink(previousPath)}</LayoutPrevious>
    <LayoutNext>{nextPathLink(nextPath)}</LayoutNext>
  </Layout>
)

ArticlesNav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  previousPath: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  nextPath: PropTypes.string,
}

ArticlesNav.defaultProps = {
  previousPath: null,
  nextPath: null,
}

export default ArticlesNav
