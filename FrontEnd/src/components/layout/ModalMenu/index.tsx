import React from 'react';
import { Container, Content, Control } from './styles';
import iconClose from '../../../assets/close.svg';
import ButtonIcon from '../ButtonIcon';

interface ModalMenuProps {
  onClose(): void;
  title?: string;
}

const ModalMenu: React.FC<ModalMenuProps> = ({ onClose, children, title }) => {
  return (
    <Container>
      <Content>
        <Control>
          <p>{title}</p>
          <ButtonIcon image={iconClose} alt="Close" onClick={onClose} />
        </Control>
        {children}
      </Content>
    </Container>
  );
};

export default ModalMenu;
