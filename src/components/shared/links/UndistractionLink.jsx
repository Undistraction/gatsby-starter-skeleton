import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import circle from '../../styles/mixins/circle'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import linkProps from '../../styles/mixins/linkProps'
import spaceChildrenH from '../../styles/mixins/spaceChildrenH'
import BaseLink from './BaseLink'

const CreditIcon = styled.span`
  align-self: center;
  transition: all 1.3s ease-in-out;
  ${circle([8, 8, 12])};
`

const Label = styled.div`
  transition: all 1s ease-in-out;
`

const Layout = styled(BaseLink)`
  ${flexHorizontal};
  ${spaceChildrenH(`0.3em`)};
  ${linkProps(`c:text`, `c:text`)};
  align-items: baseline;
  font-weight: bold;
  position: relative;

  html.feat-no-touchevents &:hover {
    ${CreditIcon} {
      transition: all 0.3s ease-in-out;
      transform: scale(0);
    }

    ${Label} {
      transition: all 0.5s ease-in-out;
      transform: translateX(-1.2em);
    }
  }
`

const TextLink = ({ children, ...rest }) => (
  <Layout {...rest}>
    <CreditIcon />
    <Label>{children}</Label>
  </Layout>
)

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
}

TextLink.displayName = `TextLink`

export default TextLink
