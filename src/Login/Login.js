import React, { Component } from 'react'

import {
    Flex,
    FormControl,
    Input, 
    Center,
    Box,
    Button,
    Heading
} from "@chakra-ui/react"

class Login extends Component {

       state = {
        username: "",
        email: "",
        password: ""
    }

    handleOnSubmit = (event) => {
        event.preventDefault()

        let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        let reqObj = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user})
        }

        fetch('http://localhost:3000/login', reqObj)
        .then(res => res.json()).then(userData => {
            localStorage.setItem("isLoggedIn", true)
            this.props.logIn(userData)
            }
        )
    }


    
    // redirect = () => {
    //   this.props.history.push('/home')
    // }


    
    
    render() {
        return (
        <Box>
            <Center>
                <Heading>
                    Login
                </Heading>
            </Center>
           

            <Center>
                <Flex direction="column" width="50vh" height="30vh" m="2%">
                <form  onSubmit={(event) => this.handleOnSubmit(event)} >
                    <FormControl id="email" m="2%">
                        <Input 
                            placeholder="Email address" 
                            type="email" 
                            borderRadius="1.5em"
                            onChange = {(event) => this.setState({ email: event.target.value }) }
                        />
                    </FormControl>
                    <FormControl m="2%">
                        <Input 
                            placeholder="password" 
                            type="password"
                            borderRadius="1.5em"
                            onChange = {(event) => this.setState({ password: event.target.value }) }    
                        />
                    </FormControl>
                    <Center>
                        <Button borderRadius="1.5em" placeholder="submit" type="submit"> Submit </Button>
                    </Center>
                </form>
                </Flex>
            </Center>
        </Box>
        )
    }
}

export default Login