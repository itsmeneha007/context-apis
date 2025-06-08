
import React, { useContext, useMemo } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Button,
  extendTheme,
} from '@chakra-ui/react';
import { AuthContext } from './contexts/AuthContext';
import { ThemeContext } from './contexts/ThemeContext';

const getCustomTheme = (theme) =>
  extendTheme({
    styles: {
      global: {
        body: {
          bg: theme === 'light' ? 'white' : 'gray.800',
          color: theme === 'light' ? 'black' : 'white',
        },
      },
    },
  });

const App = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const customTheme = useMemo(() => getCustomTheme(theme), [theme]);

  const gridTemplateColumns = ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'];
  const cardBg = theme === 'light' ? 'gray.200' : 'gray.600';
  const footerBg = theme === 'light' ? 'gray.300' : 'gray.700';
  const navBg = theme === 'light' ? 'gray.100' : 'gray.700';

  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        as="nav"
        p="4"
        bg={navBg}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>

      <Grid templateColumns={gridTemplateColumns} gap={4} p={4}>
        {['Card 1', 'Card 2', 'Card 3'].map((card) => (
          <Box key={card} p={4} shadow="md" bg={cardBg} borderRadius="md">
            {card}
          </Box>
        ))}
      </Grid>

      <Box as="footer" p={4} bg={footerBg} textAlign="center">
        Footer Content
      </Box>
    </ChakraProvider>
  );
};

export default App;
