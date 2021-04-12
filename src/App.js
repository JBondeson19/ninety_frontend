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
import CreatePostContainer from "../src/components/PostComponents/CreatePostContainer"
import ProfileContainer from "./components/ProfileComponents/ProfileContainer"
import Navbar from './components/Navbar/Navbar';
import AllPostsComponent from './components/PostComponents/AllPostsComponent';
import Login from './Login/Login';

const user_id = localStorage.getItem("user_id")
class App extends Component {
  

  state = {
    isLoggedIn: false,
    user: {},
    newUser: []
  }
  componentDidMount() {
    this.setState({
      isLoggedIn: !!localStorage.getItem("isLoggedIn")
    })

    fetch(`http://localhost:3000/users/${user_id}`)
    .then(res =>res.json())
    .then(data => this.setState({
      newUser: data
    }))
  }


  handleLogin = (data) => {
    localStorage.setItem("user_id", data.user.id)
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
                <AllPostsComponent userInfo={this.state.newUser} />
            </Route>
            <Route path="/post">
                <CreatePostContainer userInfo={this.state.newUser} />
            </Route>
            <Route path="/profile" >
                <ProfileContainer user={this.state.newUser}/>
            </Route>
            <Route path="/login">
                { this.state.isLoggedIn ? <Redirect to="/home"/> : <Login logIn={this.handleLogin} />}
            </Route>
          </Switch>
      </ChakraProvider>
    )
  }
}




export default App
