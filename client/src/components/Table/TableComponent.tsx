import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr, Center
} from '@chakra-ui/react';
import { socket } from '../../api/socket';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { ResponseExample } from '../../types/ResponseExample';

const TableComponent = () => {
  const [response, setResponse] = useState<ResponseExample[]>([]);
  const [unselected, setUnselected] = useState<ResponseExample[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit("start");
      socket.on("ticker", (data: ResponseExample[]) => {
        setResponse(data);
      });
    }, 5000)
    return () => clearInterval(interval);
  }, [response]);

  return (
    <Box>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Current price</Th>
            <Th>Change (%)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {response.map((element: ResponseExample, index) => (
            <Tr key={index} textAlign="center">
              <Td fontWeight="bold">{element.ticker}</Td>
              <Td textAlign="center" fontWeight="bold">{element.price + ' ' + '$'}</Td>
              <Td>
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
                      <FaArrowUp color="green" />
                      {element.change_percent + '%'}
                    </Flex>
                  )
                  : (
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
                      <FaArrowDown color="red" />
                      {element.change_percent + '%'}
                    </Flex>
                  )
                }
              </Td>
              <Td borderBottom="none">
                <Button
                  onClick={() => {
                    setUnselected(element);
                    console.log(unselected);
                  }}
                >
                  X
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableComponent;
