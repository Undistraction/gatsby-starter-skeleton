import { api } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { currentYear } from '../../helpers/date'
import blockCenterH from '../../styles/mixins/blockCenterH'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import Copyright from './Copyright'
import Credit from './Credit'

const Layout = styled.footer`
  text-align: center;
  ${blockCenterH};
  ${spaceChildrenV(`1ru`)};

  ${api({
    padding: `4ru 0 1ru`,
    baseline: `s:smallprint`,
  })};

  > * {
    ${api({
      margin: `0 auto 1ru`,
    })};
  }
`

const SiteFooter = ({ owner, startYear, showCredit }) => {
  const endYear = currentYear()
  const dateRange = endYear === startYear ? endYear : `${startYear}–${endYear}`

  return (
    <Layout>
      <Copyright owner={owner} dateRange={dateRange} />
      {showCredit && <Credit />}
    </Layout>
  )
}

SiteFooter.propTypes = {
  owner: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  showCredit: PropTypes.bool.isRequired,
}

export default SiteFooter
