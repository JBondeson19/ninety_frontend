import React from 'react'
import { 
    Box,
    Grid,
    Container,
    Center,
    Stack,
    Text,
    Heading
} from "@chakra-ui/react"

export default function PostContainer(props) {
    
    return (
        <Grid m="3%" border="1px" borderColor="gray.300"  borderRadius="0.95em" >
            <Text margin="1%" fontSize="xs"> Posted by: {props.post.user.username}  </Text>
            <Center>
                <Heading>{props.post.title}</Heading>
            </Center>
          
            <Stack>
                <Container align="left">{props.post.content}</Container> 
                <Box color="gray.300" p="1%" >
                    tags
                    tags 
                    more tags
                </Box>
            </Stack>
        </Grid>
    )
}
