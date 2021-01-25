import React, {useState} from 'react';
import {
  ChakraProvider,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import CreatePostContainer from "../src/components/PostComponents/CreatePostContainer"
import Navbar from './components/Navbar/Navbar';
import AllPostsComponent from './components/PostComponents/AllPostsComponent';



function App() {


  return (
    <ChakraProvider theme={theme}>
        <Grid minH="40vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
          <Navbar />
          <AllPostsComponent />
        </Grid>
    </ChakraProvider>
  );
}

export default App;
