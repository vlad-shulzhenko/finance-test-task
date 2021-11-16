import React from 'react';
import {
  Flex,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

const Footer = () => {
  const bg = useColorModeValue("#d3d3d3", "#292968");

  return (
    <Flex
      w="100%"
      justify="center"
      bgColor={bg}
      h="120px"
      flexShrink={0}
      border="1px solid"
      borderColor="grey"
      borderTopRadius="10px"
    >
      <Flex
        w="70%"
        direction="column"
        align="center"
        py="30px"
      >
        <Heading colorScheme="brand.100">
          Finance app
        </Heading>
        <Text colorScheme="brand.100">
          Copyright ©
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
