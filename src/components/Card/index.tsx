import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Title,
  ContainerTitle,
  Content,
  Value,
  CurrentInvoice,
  AvailableLimit,
  Limit,
  Button,
  TextButton,
} from './styles';

interface CardProps {
  title: string;
  subTitle: string;
  value?: string;
  availableLimit?: string;
  limit?: string;
  buttonActive?: boolean;
  activeLimit?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subTitle,
  value,
  availableLimit,
  limit,
  buttonActive,
  activeLimit
}) => {
  return (
    <Container>
      <ContainerTitle>
        <Icon name="creditcard" size={28} color="#6c6c6c" />
        <Title>
          {title}
        </Title>
      </ContainerTitle>

      <Content>
        <CurrentInvoice>{subTitle}</CurrentInvoice>
        <Value>{value}</Value>
        {activeLimit && (
          <AvailableLimit>{availableLimit} <Limit>{limit}</Limit></AvailableLimit>
        )}
        {buttonActive && (
          <Button>
            <TextButton>conhecer</TextButton>
          </Button>
        )}
      </Content>
    </Container>
  );
}

export default Card;