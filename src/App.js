import React from 'react';
import {
  ChakraProvider,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import CreatePostContainer from './components/Body/CreatePostContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <ChakraProvider theme={theme}>
        <Grid minH="40vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
          <Navbar />
          <CreatePostContainer />
        </Grid>
    </ChakraProvider>
  );
}

export default App;
