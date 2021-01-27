import React from 'react'
import { 
    Box,
    Container,
    Center,
    Stack,
    Text,
    
    Heading
} from "@chakra-ui/react"

export default function PostContainer(props) {
    return (
        <Box className="Logo" m="3%" border="1px" borderColor="gray.300" w="75%"  borderRadius="0.95em" boxShadow="lg" >
            <Text margin="2%" fontSize="xs"> Posted by: {props.post.user.username}  </Text>
            {/* <Center>
                <Heading>{props.post.title}</Heading>
            </Center>
           */}
            <Stack margin="5%">
                <Container  w="75%" align="left">{props.post.content}</Container> 
                <Box color="gray.300" p="1%" >
                    tags
                    tags 
                    more tags
                </Box>
            </Stack>
        </Box>
    )
}
