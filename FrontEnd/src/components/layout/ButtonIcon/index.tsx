import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  image: string;
  alt: string;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ image, alt, ...rest }) => (
  <Container type="button" title={alt} {...rest}>
    <img src={image} alt={alt} />
  </Container>
);

export default ButtonIcon;
