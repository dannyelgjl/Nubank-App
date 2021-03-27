import React from 'react';
import Card from '../../components/Card';
import Icon from 'react-native-vector-icons/EvilIcons';

// Styles Components
import { Container, Header, TextTitle, Configs, RoundedButton, ContainerCard } from './styles';

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
      <ContainerCard>
        <Card />
      </ContainerCard>
    </Container>
  );
}

export default Home;