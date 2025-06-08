import React, { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Sidebar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      bg={theme === 'light' ? 'gray.200' : 'gray.600'}
      p={4}
      minW="200px"
    >
      {isLoggedIn && <Text>Welcome back, user!</Text>}
    </Box>
  );
};

export default Sidebar;