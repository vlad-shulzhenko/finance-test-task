import global from './global';
import fonts from './fonts';
import { extendTheme } from '@chakra-ui/react';

const theme: Object = extendTheme({
  styles: {
    global,
  },
  fonts,
})

export default theme;
