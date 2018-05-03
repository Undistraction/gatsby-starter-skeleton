import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import ArrowButtonLink from '../shared/ArrowButtonLink'
import DisabledArrowButtonLink from '../shared/DisabledArrowButtonLink'

export const LayoutPrevious = styled.div``
export const LayoutNext = styled.div``

const Layout = styled.nav`
  justify-content: space-between;

  ${LayoutNext} {
    float: right;
  }

  ${LayoutPrevious} {
    float: left;
  }

  ${LayoutNext}, ${LayoutPrevious} {
    max-width: 49%;
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
