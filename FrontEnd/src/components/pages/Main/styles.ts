import styled, { keyframes } from 'styled-components';
import singInBackgroundImg from '../../../assets/BackGroundStart.png';

const appearFromLeft = keyframes`
from{
  opacity: 0;
  transform: translateX(-50px);
}
to{
  opacity: 1;
  transform: translateX(0);
}`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
`;


export const BackGround = styled.div`
  flex: 1;
  background: url(${singInBackgroundImg}) no-repeat center;
  background-size: cover;

  display:flex;
  justify-content: center;
  align-items: center;
`;



export const Header = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;


h1{
  color: #ffffff;

}

button{
  width: 130px;
  margin:20px;
}


`;

export const Screen = styled.div`
  width: 900px;
  max-height: 700px;
  background-color: rgba(0,0,0,0.6);

  display: flex;
  flex-direction: column;
  align-items: center;


  animation: ${appearFromLeft} 1s;
`;



export const Logo = styled.img`
    width: 259px;
    height: 86px;
    position: absolute;
    right: 10px;
    top: 10px;
`;


export const Footer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;

  font-size: 24px;
  color: #f4f8f6;
  text-decoration: bold;

  @media (max-width: 1200px) {
    display: none;
  }

  animation: ${appearFromLeft} 1s;
`;
