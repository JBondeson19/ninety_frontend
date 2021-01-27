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
        <Box m="0.5%">
            <Center bg="green.200" h="3%" w="100%" > 
                <Text fontSize="5xl">
                    Maggie123's Page
                </Text>
            </Center>
            <Grid 
                templateColumns="repeat(9, 1fr)"
                templateRows="repeat(9, 1fr)"
                gap={2}
                mt="2%"
            >
                <Profile />
                <AllPostsComponent profile={true} />
            </Grid>
        </Box>
    )
}


