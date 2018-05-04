import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../styles/api'

const PageText = styled.div`
  p:first-child {
    font-weight: bold;
  }

  p:first-child:first-letter {
    float: left;
    display: block;
    width: 200px;
    min-height: 100px;
    font-weight: normal;
    color: white;
    vertical-align: bottom;
    ${api({
      baseline: `s:megaTitle`,
      background: `g:backgroundInverted`,
      marginRight: `0.3em`,
      padding: `0.2em 0.6em 0.1em`,
    })};
  }
`

const HTMLText = ({ htmlText }) => (
  // eslint-disable-next-line react/no-danger
  <PageText dangerouslySetInnerHTML={{ __html: htmlText }} />
)

HTMLText.propTypes = {
  htmlText: PropTypes.string.isRequired,
}

export default HTMLText
