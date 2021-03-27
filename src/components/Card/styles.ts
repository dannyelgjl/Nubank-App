import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #fff;
  border-radius: 2px;
  padding: 26px;
  margin-bottom: 4px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 12px;
  font-size: 18px;
`;

export const Content = styled.View`
  margin-top: 12px;
`;

export const CurrentInvoice = styled.Text`
  font-size: 16px;
`;

export const Value = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;

  color: #32b2e7;
`;

export const AvailableLimit = styled.Text`
 margin-top: 6px;   
 font-size: 14px;
`;

export const Limit = styled.Text`
  color: green;
  font-weight: bold;
`;

