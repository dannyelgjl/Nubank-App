import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Title, ContainerTitle, Content, Value, CurrentInvoice, AvailableLimit, Limit } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <Icon name="creditcard" size={28} color="#333" />
        <Title>
          Cartão de Crédito
        </Title>
      </ContainerTitle>

      <Content>
        <CurrentInvoice>Fatura atual</CurrentInvoice>
        <Value>R$ 200,00</Value>
        <AvailableLimit>Limite Disponível <Limit>R$ 100,00</Limit></AvailableLimit>
      </Content>
    </Container>
  );
}

export default Card;