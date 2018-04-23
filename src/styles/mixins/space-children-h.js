import { css } from 'styled-components';
import { path } from 'ramda';

const api = path(['theme', 'api']);

export default values => props => css`
  & > * + * {
    ${api(props).marginLeft(values)};
  }
`;
