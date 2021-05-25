import React, { Component } from 'react'

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
import ProfileContainer from "./components/ProfileComponents/ProfileContainer"
import Navbar from './components/Navbar/Navbar';
import AllPostsComponent from './components/PostComponents/AllPostsComponent';
import Login from './Login/Login'


class App extends Component {
  
  state = {
    user: {
      id: 0,
      username:"",
      email:"",
      bio: "",
      posts: []
    },
    token: ""
  }
  
  
  setUser = (userInfo, tokenInfo) => {

    this.setState({
      user: userInfo,
      token: tokenInfo
    })

  }
  
  
  
  render() {
    return (
      <ChakraProvider theme={theme}>
        <Grid minH="40vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
            <Navbar />
        </Grid>
          <Switch>
            <Route path="/home" render={()=> <AllPostsComponent />} />
            <Route path="/post">
                <CreatePostContainer userInfo={this.state.user} token={this.state.token} />
            </Route>
            <Route path="/profile" render = {() => <ProfileContainer user={this.state.user}/> }/>
            <Route exact path="/login" render = {() => <Login setUser={this.setUser}/> }/>
          </Switch>
      </ChakraProvider>
    )
  }
}




export default App
