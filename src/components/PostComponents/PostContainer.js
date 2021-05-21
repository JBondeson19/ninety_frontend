
import React from "react";
import { 
    Box,
    Container,
    Stack,
    Text,
} from "@chakra-ui/react"

const PostContainer = ({posts}) => {
    

        return (
            
            <Box>
                {posts.map((post)=>(
                    <Box className="Logo" m="3%" border="1px" borderColor="gray.300"   borderRadius="0.5em" w="75%" boxShadow="lg" key={post.id} >
                        <Text margin="2%" fontSize="xs"> Posted by: {post.user.user_username}  </Text>
                        <Stack margin="5%">
                         <Container  w="75%" align="left">{post.content}</Container> 
                         <Box color="gray.300" p="1%" >
                             tags
                             tags 
                             more tags
                         </Box>
                     </Stack>
                    </Box>
                    ))
                }
            </Box>
        )
    
}

export default PostContainer
