import { css } from 'styled-components';

export default () => css`
  color: inherit;
  font-weight: bold;
  text-decoration: none;

  &:link,
  &:visited,
  &:active {
    color: inherit;
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
    text-decoration-skip: ink;
  }
`;
