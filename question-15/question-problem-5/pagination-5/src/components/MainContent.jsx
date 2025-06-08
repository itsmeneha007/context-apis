import React, { useContext } from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { ThemeContext } from '../contexts/ThemeContext';

const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={4}
      p={4}
      flex="1"
    >
      {products.map((item) => (
        <Box
          key={item}
          p={4}
          bg={theme === 'light' ? 'gray.100' : 'gray.700'}
          color={theme === 'light' ? 'black' : 'white'}
          borderRadius="md"
        >
          {item}
        </Box>
      ))}
    </Grid>
  );
};

export default MainContent;