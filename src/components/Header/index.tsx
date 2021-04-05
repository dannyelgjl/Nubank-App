import React from 'react';
// Icon
import Icon from 'react-native-vector-icons/EvilIcons';
// Types
import { HeaderProps } from './types';
// Styles
import { Container, TextTitle, Configs, RoundedButton } from './styles';


const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <TextTitle>
        Olá, {title}
      </TextTitle>
      <Configs>
        <RoundedButton>
          <Icon name="eye" size={38} color="#ccc" />
        </RoundedButton>
        <RoundedButton>
          <Icon name="gear" size={38} color="#ccc" />
        </RoundedButton>
      </Configs>
    </Container>
  );
}

export default Header;