import styled from 'styled-components/native';

export const ScrollTabs = styled.ScrollView`
`;

export const Container = styled.View`
  flex-direction: row;
`;  

export const Tab = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  width: 94px;
  padding: 8px;
  margin-right: 8px;
  margin-bottom: 30px;
  border-radius: 2px;

  background: #9824c7;
`

export const TabName = styled.Text`
  color: #fff;
`;