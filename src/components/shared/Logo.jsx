import { api } from 'cssapi'
import React from 'react'
import styled from 'styled-components'
import fixAspectRatio from '../styles/mixins/fixAspectRatio'

const Layout = styled.div`
  ${fixAspectRatio(96, 113)};

  /* Have to use an id instead of a classname as SVG doesn't support classes   for targeting gradients */
  #logoGrad {
    .gradientStart {
      ${api({
        color: `c:backgroundInvertedStart`,
      })};
    }

    .gradientEnd {
      ${api({
        color: `c:backgroundInvertedEnd`,
      })};
    }
  }

  svg path {
    fill: url(#logoGrad);
  }
`

const Logo = () => (
  <Layout>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      preserveAspectRatio="xMinYMin meet"
      xmlSpace="preserve"
      viewBox="0 0 96 113"
    >
      <title>Skull Logo</title>
      <defs>
        <linearGradient id="logoGrad">
          <stop offset="0" className="gradientStart" />
          <stop offset="1" className="gradientEnd" />
        </linearGradient>
      </defs>
      <path d="M88.4,72c1-8.7,2.6-9.1,4.5-16.2c8-29-13.8-55.2-44.7-55.3l0,0h-0.1H48h-0.1l0,0l0,0h-0.1h-0.1h-0.1l0,0
						C16.8,0.7-4.9,26.8,3,55.9c1.9,7,3.5,7.4,4.5,16.2c-7.4,3.6-8,21.8,8.1,21c4.2-0.5,8.9-2.5,8.9,3l-3.3,14.3c0,0,0,2.3,2,2.3
						c1,0,48.6,0,49.6,0c2.2,0,2-2.4,2-2.4L71.5,96c0-5.5,4.6-3.5,8.9-3C96.4,93.9,95.9,75.7,88.4,72z M36.9,71.3
						c-6.2,3.6-12.6,8.1-19.3,4c-6.7-4.2-5.8-13.9-1.8-20.1c3.4-5.2,22.8-4,25.2,0.5C43.5,60,43.1,67.7,36.9,71.3z M56.3,87.6
						c-0.8,3.5-5.7-2-8.1-2.3l0,0h-0.1H48h-0.1h-0.1h-0.1h-0.1l0,0c-2.4,0.4-7.3,5.9-8.1,2.3c-0.4-2.3,5.7-10.8,6.5-16.3
						c0.2-1.1,1.1-1.2,1.5-1.3c0,0,0,0,0.1,0h0.1l0,0l0,0c0,0,0,0,0.1,0l0,0l0,0h0.1l0,0l0,0c0,0,0,0,0.1,0h0.1
						c0.4,0,1.4,0.2,1.5,1.3C50.6,76.8,56.8,85.4,56.3,87.6z M78.4,75.3c-6.7,4.1-13.1-0.4-19.3-4C52.9,67.7,52.5,60,55,55.7
						c2.4-4.4,21.8-5.7,25.2-0.5C84.2,61.4,85.1,71.1,78.4,75.3z"
      />
    </svg>
  </Layout>
)

export default Logo
