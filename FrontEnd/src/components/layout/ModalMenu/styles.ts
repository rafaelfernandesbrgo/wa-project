import styled, { keyframes } from 'styled-components';

const appearEffect = keyframes`
from{
  opacity:0;
}
to{
  opacity:1;
}`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #f4f8f6;
  border-radius: 20px;
  animation: ${appearEffect} 1s;


`;

export const Control = styled.div`
  height: 35px;
  width: 100%;
  background-color: #D7DCE3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;

  p {
    padding-left: 10px;
    font-size: 24px;
    color: #3F1FFF;
  }
  img {
    width: 24px;
    height: 24px;
    margin: 8px;
    position: absolute;
    top: 0;
    right: 5px;
  }
`;
