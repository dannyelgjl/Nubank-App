import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #fff;
  border-radius: 2px;
  padding: 26px;
  margin-bottom: 14px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 12px;
  font-size: 18px;
  color: #6f6f6f;
`;

export const Content = styled.View`
  margin-top: 12px;
`;

export const CurrentInvoice = styled.Text`
  font-size: 16px;
  color: #707070;
`;

export const Value = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;

  color: #11aae6;
`;

export const AvailableLimit = styled.Text`
 margin-top: 6px;   
 font-size: 14px;
 color: #1e1e1e;
`;

export const Limit = styled.Text`
  color: green;
  font-weight: bold;
  color: #11683e;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: solid 0.5px #73009b;

  width: 110px;
  padding: 12px 14px;
`;

export const TextButton = styled.Text`
  color: #73009b;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

