import React from 'react'
import Profile from "./Profile";
import { 
    Grid,
    Box,
    Center,
    Text
} from "@chakra-ui/react";
import AllPostsComponent from "../PostComponents/AllPostsComponent"

export default function ProfileContainer() {
    
    return (
        <Box m="1%">
            <Center bg="green.200" h="7%" w="100%" > 
                <Text fontSize="5xl">
                    Maggie123's Page
                </Text>
            </Center>
            <Grid 
                templateColumns="repeat(7, 1fr)"
                templateRows="repeat(9, 1fr)"
                gap={6}
                mt="2%"
            >
                <Profile />
                <AllPostsComponent />
            </Grid>
        </Box>
    )
}


