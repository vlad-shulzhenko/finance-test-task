import * as React from 'react'
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import theme from './theme';
import TableComponent from './components/Table/TableComponent';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex minH="100vh" direction="column">
        <Header />
        <Flex flexGrow={1} justify="center" py="50px">
          <TableComponent />
        </Flex>
        <Footer />
    </Flex>
  </ChakraProvider>
)
