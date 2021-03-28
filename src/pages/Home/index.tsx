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
        <Card
          title="Cartão de Crédito"
          subTitle="Fatura atual"
          value="R$ 200,00"
          availableLimit="Limite do Cartão"
          limit="R$ 100,00"
          activeLimit
        />

        <Card
          title="Conta"
          subTitle="Saldo disponível"
          value="R$ 10.000,00"
        />

        <Card
          title="Seguro de vida"
          subTitle="Conheça Nubank Vida: 
          um seguro simples e que cabe no seu bolso"
          buttonActive
        />
      </ContainerCard>
    </Container>
  );
}

export default Home;