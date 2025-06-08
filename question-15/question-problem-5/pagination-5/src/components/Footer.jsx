import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      p={4}
      bg={theme === 'light' ? 'gray.300' : 'gray.800'}
      textAlign="center"
      color={theme === 'light' ? 'black' : 'white'}
    >
      Footer Content
    </Box>
  );
};

export default Footer;