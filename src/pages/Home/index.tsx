import React from 'react';
// Components
import Card from '../../components/Card';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
// Styles
import { Container, ContainerCard } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header title="Daniel Jerônimo" />
      <ContainerCard showsVerticalScrollIndicator={false}>
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

        <Card
          title="Seguro de vida"
          subTitle="Conheça Nubank Vida: 
          um seguro simples e que cabe no seu bolso"
          buttonActive
        />
      </ContainerCard>

      <Tabs />
    </Container>
  );
}

export default Home;