import { css } from 'styled-components';

export default space => css`
  & > * + * {
    margin-left: ${space};
  }
`;
