import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'

import { Container, Tab, TabName, ScrollTabs } from './styles';

const Tabs = () => {
  return (
    <ScrollTabs horizontal={true} showsHorizontalScrollIndicator={false}>
      <Container >
        <Tab>
          <Icon name="barcode" size={18} color="#fff" />
          <TabName>Pagar</TabName>
        </Tab>

        <Tab >
          <Icon name="barcode" size={18} color="#fff" />
          <TabName>Pagar</TabName>
        </Tab>

        <Tab >
          <Icon name="barcode" size={18} color="#fff" />
          <TabName>Pagar</TabName>
        </Tab>

        <Tab >
          <Icon name="barcode" size={18} color="#fff" />
          <TabName>Pagar</TabName>
        </Tab>

        <Tab >
          <Icon name="barcode" size={18} color="#fff" />
          <TabName>Pagar</TabName>
        </Tab>

        <Tab>
          <Icon name="barcode" size={18} color="#fff" />
          <TabName>Pagar</TabName>
        </Tab>

        <Tab >
          <Icon name="barcode" size={18} color="#fff" />
          <TabName>Pagar</TabName>
        </Tab>
      </Container>
    </ScrollTabs>
  );
}

export default Tabs