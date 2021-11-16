import React, { useMemo } from 'react';
import { useTickersContext } from '../../TickersContext';
import { ResponseExample } from '../../types/ResponseExample';
import {
  Box,
  Flex,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Spinner } from '@chakra-ui/react';

const TableComponent = () => {
  const { response, unselected, setUnselected } = useTickersContext();
  const bg = useColorModeValue("#fff", "#333546");

  const tableItems = useMemo(() => {
    return response.filter((el: ResponseExample) => !unselected.includes(el.ticker));
  }, [response, unselected]);

  return (
    <Box
      border="1px solid grey"
      borderRadius="10px"
    >
      <Table
        variant="simple"
        size="lg"
        bgColor={bg}
        borderRadius="10px"
        position="relative"
      >
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Exchange</Th>
            <Th>Current price</Th>
            <Th>Change ($)</Th>
            <Th>Change (%)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableItems.length > 0
            ?
            (tableItems.map((element: ResponseExample, index: number) => (
              <Tr key={index} textAlign="center">
                <Td py="10px" fontWeight="bold">{element.ticker}</Td>
                <Td py="10px" fontWeight="bold">{element.exchange}</Td>
                <Td py="10px" textAlign="center" fontWeight="bold">
                  {element.price + ' $'}
                </Td>
                <Td py="10px" textAlign="center" fontWeight="bold">
                  {element.change}
                </Td>
                <Td py="10px">
                  {parseFloat(element.change_percent) > 0
                    ? (
                      <Flex
                        w="80px"
                        bgColor="#84f4a4"
                        justify="center"
                        align="center"
                        py="3px"
                        gridGap="5px"
                        borderRadius="5px"
                        color="#397a59"
                        fontWeight="bold"
                      >
                        <FaArrowUp color="green"/>
                        {element.change_percent + '%'}
                      </Flex>
                    )
                    :
                    (
                      <Flex
                        w="80px"
                        bgColor="#f29087"
                        justify="center"
                        align="center"
                        py="3px"
                        gridGap="5px"
                        borderRadius="5px"
                        color="#872d25"
                        fontWeight="bold"
                      >
                        <FaArrowDown color="red"/>
                        {element.change_percent + '%'}
                      </Flex>
                    )
                  }
                </Td>
                <Td borderBottom="none" py="10px">
                  <Button
                    onClick={() => {
                      setUnselected([...unselected, element.ticker]);
                    }}
                  >
                    x
                  </Button>
                </Td>
              </Tr>)))
            :
            (
              <Box
                mt="60px"
                position="absolute"
                width="100%"
                display="flex"
                justifyContent="center"
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Box>
            )
          }
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableComponent;
