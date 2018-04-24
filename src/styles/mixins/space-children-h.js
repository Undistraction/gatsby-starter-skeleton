import { css } from 'styled-components';
import api from '../api';

export default values => css`
  & > * + * {
    ${api.marginLeft(values)};
  }
`;
