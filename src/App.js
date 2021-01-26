import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom"
import {
  ChakraProvider,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import CreatePostContainer from "../src/components/PostComponents/CreatePostContainer"
import Navbar from './components/Navbar/Navbar';
import AllPostsComponent from './components/PostComponents/AllPostsComponent';
import Login from './Login/Login';



function App() {


  return (
    
    <ChakraProvider theme={theme}>
        <Grid minH="40vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
          <Navbar />
        </Grid>
        <Switch>
        <Route path="/home">
            <AllPostsComponent />
        </Route>
        <Route path="/post">
            <CreatePostContainer />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        

        </Switch>
    </ChakraProvider>
  );
}

export default App;
