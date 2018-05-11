import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { dateRange } from '../../helpers/formatting'
import VLayout from '../../shared/layouts/VLayout'
import blockCenterH from '../../styles/mixins/blockCenterH'
import Copyright from './Copyright'
import Credit from './Credit'

const Layout = styled(VLayout.withComponent(`footer`))`
  ${blockCenterH};

  ${api({
    baseline: scope`s:smallprint`,
  })};

  > * {
    min-width: 75%;
    ${api({
      marginH: `auto`,
    })};
  }
`

const SiteFooter = ({ owner, startYear, showCredit }) => (
  <Layout>
    <Copyright owner={owner} dateRange={dateRange(startYear)} />
    {showCredit && <Credit />}
  </Layout>
)

SiteFooter.propTypes = {
  owner: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  showCredit: PropTypes.bool.isRequired,
}

export default SiteFooter
