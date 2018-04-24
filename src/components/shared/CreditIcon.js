import styled from 'styled-components';
import circle from '../../styles/mixins/circle';

export default styled.span`
  display: inline-block;
  ${props => circle('12px', 'black')};
`;
