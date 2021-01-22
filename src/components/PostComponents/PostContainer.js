import React from 'react'
import { 
    Box,
    Grid,
    Container,
    Center,
    Button,
    Stack,
    Text,
    Heading
} from "@chakra-ui/react"

export default function PostContainer() {
    return (
        <Grid m="3%" border="1px" borderColor="gray.300"  borderRadius="0.95em" >
            <Text margin="1%" fontSize="xs"> Posted by: JamesB72 </Text>
            <Center>
                <Heading>Hi</Heading>
            </Center>
          
            <Stack>
                <Container align="left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Container> 
                <Box color="gray.300" p="1%" >
                    tags
                    tags 
                    more tags
                </Box>
            </Stack>
        </Grid>
    )
}
