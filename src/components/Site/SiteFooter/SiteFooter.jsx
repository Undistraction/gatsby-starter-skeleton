import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Credit from './Credit'
import Copyright from './Copyright'
import blockCenterH from '../../styles/mixins/blockCenterH'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import api from '../../styles/api'
import { currentYear } from '../../helpers/date'

const Layout = styled.footer`
  text-align: center;
  ${blockCenterH};
  ${spaceChildrenV('1ru')};

  ${api({
    padding: '4ru 0 1ru',
    baseline: 's:smallprint',
  })};

  > * {
    ${api({
      margin: ['0 auto 1ru'],
    })};
  }
`

const SiteFooter = ({ metadata }) => {
  const endYear = currentYear()
  const { owner, startYear, showCredit } = metadata
  const dateRange = endYear === startYear ? endYear : `${startYear}–${endYear}`

  return (
    <Layout>
      <Copyright owner={owner} dateRange={dateRange} />
      {showCredit && <Credit />}
    </Layout>
  )
}

SiteFooter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  metadata: PropTypes.object.isRequired,
}

SiteFooter.displayName = 'SiteFooter'

export default SiteFooter
