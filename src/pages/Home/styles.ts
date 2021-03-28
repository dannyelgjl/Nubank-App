import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px 12px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTitle = styled.View``;

export const TextTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const Configs = styled.View`
  flex-direction: row;
`;

export const RoundedButton = styled.TouchableOpacity`
  align-items: center;  
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  padding: 4px;
  margin-right: 8px;
  background: #9824c7;
`;

export const ContainerCard = styled.ScrollView`
  margin-top: 28px;
`;