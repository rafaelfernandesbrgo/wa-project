import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #3F1FFF;
  width: 256px;
  height: 56px;
  border-radius: 5px;
  border: 0;
  color: #f4f8f6;

  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#3F1FFF')};
  }
`;



