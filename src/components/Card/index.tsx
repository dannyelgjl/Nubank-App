import React from 'react';
// Icon
import Icon from 'react-native-vector-icons/AntDesign';
// Types
import { CardProps } from './types';
// Styles
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


const Card: React.FC<CardProps> = ({
  title,
  subTitle,
  value,
  availableLimit,
  limit,
  buttonActive,
  activeLimit,
  onPress
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
          <Button onPress={onPress}>
            <TextButton>conhecer</TextButton>
          </Button>
        )}
      </Content>
    </Container>
  );
}

export default Card;