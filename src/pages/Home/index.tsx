import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';

// Styles Components
import { Container, Header, TextTitle, Configs, RoundedButton } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <TextTitle>
          Olá, Daniel Lindo
          </TextTitle>

        <Configs>
          <RoundedButton>
            <Icon name="eye" size={38} color="#ccc" />
          </RoundedButton>
          <RoundedButton>
            <Icon name="gear" size={38} color="#ccc" />
          </RoundedButton>
        </Configs>
      </Header>
    </Container>
  );
}

export default Home;