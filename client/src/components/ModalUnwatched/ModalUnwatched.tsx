import React from 'react';
import { useTickersContext } from '../../TickersContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

const ModalUnwatched = () => {
  const { unselected } = useTickersContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} disabled={!unselected.length}>
        View removed
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Removed from the watchlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {unselected.length > 0
              ? (
                <List spacing="10px">
                  {unselected.map((ticker, index: number) => (
                    <ListItem key={index}>
                      <Flex justify="space-between">
                        {ticker}
                        <Button onClick={() => [...unselected.splice(index, 1)]}>
                          +
                        </Button>
                      </Flex>
                    </ListItem>
                  ))}
                </List>
              )
              : (
                <Text>No unwatched tickers</Text>
              )
            }
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUnwatched;
