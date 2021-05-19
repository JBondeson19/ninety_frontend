import React, { Component } from 'react'

import {
  Switch,
  Redirect,
  Route
} from "react-router-dom"
import {
  ChakraProvider,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import axios from "axios"

// import CreatePostContainer from "../src/components/PostComponents/CreatePostContainer"
import ProfileContainer from "./components/ProfileComponents/ProfileContainer"
import Navbar from './components/Navbar/Navbar';
import AllPostsComponent from './components/PostComponents/AllPostsComponent';
import Login from './Login/Login';

class App extends Component {
  
  state = {
    user: {},
  }
  
  
  setUser = (userInfo) => {
    this.setState({
      user: userInfo
    })
  }
  //callback for userInfo from Login
  
  
  
  render() {
    return (
      <ChakraProvider theme={theme}>
        <Grid minH="40vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Navbar />
        </Grid>
          <Switch>
            <Route path="/home" render={()=> <AllPostsComponent />} />
            {/* <Route path="/post">
                <CreatePostContainer userInfo={this.state.user} />
            </Route> */}
            {/* <Route path="/profile" render = {() => <ProfileContainer user={this.state.user}/> }/>
            <Route exact path="/login" render = {() => <Login setUser={this.setUser}/> }/> */}
          </Switch>
      </ChakraProvider>
    )
  }
}




export default App
