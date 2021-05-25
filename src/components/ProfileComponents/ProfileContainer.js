import React from 'react'
import Profile from "./Profile";
import { 
    Grid,
    Box,
    Center,
    Text
} from "@chakra-ui/react";
import UserPostsComponent from "../PostComponents/UserPostsComponent"

export default function ProfileContainer({user}) {
   
    return (
        <Box m="2%">
            <Center h="3%" w="100%" > 
                <Text fontSize="5xl">
                 {user.username}'s Page
                </Text>
            </Center>
            <Grid 
                templateColumns="repeat(9, 1fr)"
                templateRows="repeat(9, 1fr)"
                gap={2}
                mt="2%"
            >
                <Profile user={user} />
                <UserPostsComponent user={user} />
            </Grid>
        </Box>
    )
}


