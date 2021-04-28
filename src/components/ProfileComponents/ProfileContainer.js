import React from 'react'
import Profile from "./Profile";
import { 
    Grid,
    Box,
    Center,
    Text
} from "@chakra-ui/react";
// import UserPostsComponent from "../PostComponents/UserPostsComponent"

export default function ProfileContainer(props) {
    console.log("User Info")
    console.log(props)

    return (
        <Box m="2%">
            <Center h="3%" w="100%" > 
                <Text fontSize="5xl">
                 {props.user.usernames}'s Page
                </Text>
            </Center>
            <Grid 
                templateColumns="repeat(9, 1fr)"
                templateRows="repeat(9, 1fr)"
                gap={2}
                mt="2%"
            >
                <Profile  />
                {/* <UserPostsComponent profile={true} /> */}
            </Grid>
        </Box>
    )
}


