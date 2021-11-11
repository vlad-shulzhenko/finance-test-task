import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      bgColor="#4C2FA1"
      h="120px"
      flexShrink={0}
      borderTopRadius="15px"
    >
      <Flex
        w="70%"
        direction="column"
        align="center"
        py="30px"
      >
        <Heading color="#fff" >
          Finance app
        </Heading>
        <Text color="d7d7d7">
          Copyright ©
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
