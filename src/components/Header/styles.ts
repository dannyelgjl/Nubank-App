import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

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
