import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Header = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      bgColor="#4C2FA1"
      h="120px"
      flexShrink={0}
      borderBottomRadius="15px"
    >
      <Flex
        w="70%"
        justify="space-between"
        py="30px"
      >
        <Heading color="#fff">
          Finance app
        </Heading>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Flex>
  );
};



export default Header;
