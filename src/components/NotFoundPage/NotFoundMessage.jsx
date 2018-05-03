import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TextLink from '../shared/TextLink'
import api from '../styles/api'
import Logo from '../shared/Logo'
import flexVertical from '../styles/mixins/flexVertical'
import flexHorizontal from '../styles/mixins/flexHorizontal'
import spaceChildrenV from '../styles/mixins/spaceChildrenV'
import spaceChildrenH from '../styles/mixins/spaceChildrenH'

const Four = styled.div``

const Layout = styled.div`
  ${flexVertical};
  ${spaceChildrenV(`2ru`)};
  text-align: center;

  ${Four} {
    position: relative;
    ${api({
      top: `1ru`,
    })};
  }
`

const Header = styled.header`
  ${flexHorizontal};
  ${spaceChildrenH(`0.25ru`)};
  ${api({
    fontSize: `s:giant`,
    fontFamily: `f:title`,
    marginH: `auto`,
  })};
`

const Body = styled.div``

const NotFoundMessage = ({ path }) => (
  <Layout>
    <Header>
      <Four>4</Four>
      <Logo />
      <Four>4</Four>
    </Header>
    <Body>
      <p>
        There was no page at <i>{path}</i>.
      </p>
      <p>
        Would you like to go to the <TextLink to="/">Home page</TextLink>?
      </p>
    </Body>
  </Layout>
)

NotFoundMessage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default NotFoundMessage
