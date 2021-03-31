import styled, { css } from 'styled-components';
import Tooltip from '../../dialogs/Tooltip';

interface ContainerPorps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerPorps>`
  width: 256px;
  height: 56px;
  background: #3F1FFF;
  border-radius: 10px;
  border: #3F1FFF solid 1px;

  display: flex;
  align-items: center;
  margin: 12px;

  div {
    background: #3F1FFF;
    border-radius: 10px;
    width: 50px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & + div {
    margin-top: 12px;
  }

  input {
    background: #f4f8f6;
    height: 100%;
    width: 100%;
    border: 0;
    padding-left: 10px;
    border-radius: 10px;
    color: #714e2e;

    &::placeholder {
      color: #714e2e;
      font-size: 24px;
    }

    &:disabled{
        opacity: 0.8;
    }
  }
  ${props =>
    props.isErrored &&
    css`
      border: #c53030 solid 2px;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: #3F1FFF solid 2px;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;

    &&::before {
      background: #c53030 transparent;
    }
  }
`;
