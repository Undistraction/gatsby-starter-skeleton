import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import TextLink from '../shared/TextLink'

const Header = styled.header``

const Body = styled.div``
const View = styled.div`
  ${flexVertical};
  ${spaceChildrenV('0.5ru')};
`

const ArticlesListItem = ({ article }) => {
  const { frontmatter, fields } = article
  return (
    <View>
      <Header>
        <date>{frontmatter.date}</date>{' '}
        <TextLink to={fields.slug}>{frontmatter.title}</TextLink>
      </Header>
      <Body>
        <p>{article.excerpt}</p>
      </Body>
    </View>
  )
}

ArticlesListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
}

export default ArticlesListItem
