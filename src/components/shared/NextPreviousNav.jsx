import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import flexHorizontal from '../styles/mixins/flexHorizontal'
import ArrowButtonLink from '../shared/ArrowButtonLink'
import DisabledArrowButtonLink from '../shared/DisabledArrowButtonLink'

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

const previousPathLink = (previousPath, label) =>
  previousPath ? (
    <ArrowButtonLink to={previousPath} direction="left">
      {label}
    </ArrowButtonLink>
  ) : (
    <DisabledArrowButtonLink direction="left">{label}</DisabledArrowButtonLink>
  )

const nextPathLink = (nextPath, label) =>
  nextPath ? (
    <ArrowButtonLink to={nextPath} direction="right">
      {label}
    </ArrowButtonLink>
  ) : (
    <DisabledArrowButtonLink direction="right">{label}</DisabledArrowButtonLink>
  )

const NextPreviousNav = ({
  previousPath,
  nextPath,
  previousLabel,
  nextLabel,
}) => (
  <Layout>
    <LayoutPrevious>
      {previousPathLink(previousPath, previousLabel)}
    </LayoutPrevious>
    <LayoutNext>{nextPathLink(nextPath, nextLabel)}</LayoutNext>
  </Layout>
)

NextPreviousNav.propTypes = {
  previousPath: PropTypes.string,
  nextPath: PropTypes.string,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
}

NextPreviousNav.defaultProps = {
  previousPath: null,
  nextPath: null,
  previousLabel: `Previous`,
  nextLabel: `Next`,
}

export default NextPreviousNav
