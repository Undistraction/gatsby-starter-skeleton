import { api, scope } from 'cssapi'
import styled from 'styled-components'

export default styled.div`
  ${api({
    fontFamily: `f:title`,
    baseline: scope`s:primaryTitle`,
  })};
`
