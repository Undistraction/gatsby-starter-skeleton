import React from 'react';
import styled from 'styled-components';
import circle from '../../../../styles/mixins/circle';
import IconLink from '../../../shared/IconLink';
import api from '../../../../styles/api';

const CreditIcon = styled.span`
  display: inline-block;
  ${circle([12])};
`;

const View = styled.p`
  ${CreditIcon} {
    ${api({
      position: 'relative',
      top: 2,
    })};
  }
`;

const Credit = () => (
  <View>
    Built by{' '}
    <IconLink to="http://undistraction.com">
      <CreditIcon />
      <span>Undistraction</span>
    </IconLink>
  </View>
);

export default Credit;
