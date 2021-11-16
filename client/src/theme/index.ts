import global from './global';
import fonts from './fonts';
import colors from './colors';
import { extendTheme } from '@chakra-ui/react';

const theme: Object = extendTheme({
  styles: {
    global,
  },
  fonts,
  colors,
})

export default theme;
