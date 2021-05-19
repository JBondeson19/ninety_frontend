
import React, { useEffect, useState } from "react";
import { 
    Box,
    Container,
    Stack,
    Text,
} from "@chakra-ui/react"

export default function PostContainer() {

    
        fetch("http://localhost:3000/api/v1/posts")
        .then(res => res.json())
        .then(postsArray => this.setState({
          posts: postsArray
        }))
    
      
        return (
            <Box className="Logo" m="3%" border="1px" borderColor="gray.300"   borderRadius="0.5em" w="75%" boxShadow="lg" >
                <Text margin="2%" fontSize="xs"> Posted by:   </Text>
                <Stack margin="5%">
                    <Container  w="75%" align="left"></Container> 
                    <Box color="gray.300" p="1%" >
                        tags
                        tags 
                        more tags
                    </Box>
                </Stack>
            </Box>
        )
    
}
