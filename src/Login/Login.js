import React from 'react'
import {
    Flex,
    FormControl,
    Input, 
    Center,
    Box,
    Button,
    Stack,
    Heading
} from "@chakra-ui/react"

export default function Login() {

    
    return (
        <Box>
        <Center>
            <Heading>
                Login
            </Heading>
        </Center>

        <Center>
            <Flex direction="column" width="50vh" height="30vh" m="2%">
                <FormControl id="email" m="2%">
                    <Input placeholder="Email address" type="email" />
                </FormControl>
                <FormControl m="2%">
                    <Input placeholder="password" type="email" />
                </FormControl>
                <Center>
                    <Button> Submit </Button>
                </Center>
            </Flex>
        </Center>
        </Box>
    )
}
