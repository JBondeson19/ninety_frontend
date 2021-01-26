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

import CreatePostContainer from "../src/components/PostComponents/CreatePostContainer"
import ProfileContainer from "./components/ProfileComponents/ProfileContainer"
import Navbar from './components/Navbar/Navbar';
import AllPostsComponent from './components/PostComponents/AllPostsComponent';
import Login from './Login/Login';

class App extends Component {
  
  state = {
    isLoggedIn: false,
    user: {}
  }
  componentDidMount() {
    this.loginStatus()
    this.setState({
      isLoggedIn: !!localStorage.getItem("isLoggedIn")
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3000/logged_in')    
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
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
            <Route path="/home">
                <AllPostsComponent />
            </Route>
            <Route path="/post">
                <CreatePostContainer />
            </Route>
            <Route path="/profile" >
                <ProfileContainer />
            </Route>
            <Route exact path="/login">
                { this.state.isLoggedIn ? <Redirect to="/home"/> : <Login logIn={this.handleLogin} />}
            </Route>
          </Switch>
      </ChakraProvider>
    )
  }
}




export default App
