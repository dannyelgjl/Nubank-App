import React from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';

// Styles Components
import { Container, ContainerCard } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header title="Daniel Jerônimo" />
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