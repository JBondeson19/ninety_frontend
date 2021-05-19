
import React from "react";
import { 
    Box,
    Container,
    Stack,
    Text,
} from "@chakra-ui/react"
import AllPostsComponent from './AllPostsComponent'

const PostContainer = ({post}) => {
    console.log("these are your posts!")
    console.log(post)
    
    
      
        return (
            <Box className="Logo" m="3%" border="1px" borderColor="gray.300"   borderRadius="0.5em" w="75%" boxShadow="lg" >
                <Text margin="2%" fontSize="xs"> Posted by: {post.user}  </Text>
                <Stack margin="5%">
                    <Container  w="75%" align="left">{post.content}</Container> 
                    <Box color="gray.300" p="1%" >
                        tags
                        tags 
                        more tags
                    </Box>
                </Stack>
            </Box>
        )
    
}

export default PostContainer
