import React from 'react';
import {
  ChakraProvider,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import ProfileContainer from "./components/ProfileComponents/ProfileContainer"
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <ChakraProvider theme={theme}>
        <Grid minH="40vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
          <Navbar />
          <ProfileContainer />
        </Grid>
    </ChakraProvider>
  );
}

export default App;
