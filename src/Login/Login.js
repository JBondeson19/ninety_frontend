import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {
    Flex,
    FormControl,
    Input, 
    Center,
    Box,
    Button,
    Heading
} from "@chakra-ui/react"

const Login = (props) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
   

    const history = useHistory();



    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true);

        const loggedUser = {email, password}

        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(loggedUser)
        })
        .then(res => res.json())
        .then((res) => {
            setIsLoading(false);
           props.setUser(res.user, res.token)
           history.push('/home') 
        })

    }

    
        return (
        <Box>
            <Center>
                <Heading>
                    Login
                </Heading>
            </Center>
            <Center>
                <Flex 
                    direction="column" 
                    width="50vh" 
                    height="30vh" 
                    m="2%"
                >
                <form onSubmit={handleSubmit}>
                    <FormControl id="email" m="2%">
                        <Input 
                            placeholder="Email address" 
                            type="email" 
                            borderRadius="1.5em"
                            value={email}
                            onChange={(event)=> setEmail(event.target.value)} 
                        />
                    </FormControl>
                    <FormControl m="2%">
                        <Input 
                            placeholder="password" 
                            type="password"
                            borderRadius="1.5em"
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                        />
                    </FormControl>
                    <Center>
                        <Button 
                            borderRadius="1.5em" 
                            placeholder="submit" 
                            type="submit"
                        >
                        Submit
                        </Button>
                    </Center>
                </form>
                </Flex>
            </Center>
        </Box>
        )
    
}

export default Login