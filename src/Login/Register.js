import React from 'react'
import {
    Flex,
    FormControl,
    Input, 
    Center,
    Box,
    Heading
} from "@chakra-ui/react"

export default function Register() {

    
    return (
        <Box>
        <Center>
            <Heading>
                Register
            </Heading>
        </Center>
    
        <Center>
            <Flex direction="column" width="50vh" height="40vh">
                <FormControl id="email">
                    <Input placeholder="Email address" type="email" />
                </FormControl>
                <FormControl>
                    <Input placeholder="password" type="email" />
                </FormControl>
            </Flex>
        </Center>
        </Box>
    )
}
