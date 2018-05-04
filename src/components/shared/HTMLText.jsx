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
    font-size: 1.7em;
    font-weight: normal;
    margin-right: 0.2em;
    padding: 12px 10px 5px;
    color: white;
    ${api({
      background: `g:backgroundInverted`,
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
