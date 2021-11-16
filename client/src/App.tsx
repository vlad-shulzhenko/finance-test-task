import * as React from 'react'
import theme from './theme';
import { TickersContextProvider } from './TickersContext';
import { ChakraProvider, Flex } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TableComponent from './components/TableComponent/TableComponent';
import ModalUnwatched from './components/ModalUnwatched/ModalUnwatched';

export const App = () => (
  <ChakraProvider theme={theme}>
    <TickersContextProvider>
      <Flex minH="100vh" direction="column">
        <Header />
        <Flex
          direction="column"
          flexGrow={1}
          justify="center"
          align="center"
          py="50px"
          gridGap="10px"
        >
          <ModalUnwatched />
          <TableComponent />
        </Flex>
        <Footer />
      </Flex>
    </TickersContextProvider>
  </ChakraProvider>
);
