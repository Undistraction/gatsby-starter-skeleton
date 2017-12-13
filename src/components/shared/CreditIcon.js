import styled from 'styled-components';
import circle from '../../styles/mixins/circle';

export default styled.div`
  display: inline-block;
  ${props => circle('12px', props.theme.text)};
`;
