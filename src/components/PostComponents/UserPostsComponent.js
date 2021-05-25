import React from 'react'
import { 
    GridItem,
    Box,
    Text,
    Stack,
    Container
} from "@chakra-ui/react";


const UserPostsComponent = (props) =>  {

  console.log("User", props.user.posts)






  
   const userPosts = props.user.posts

   userPosts.reverse().slice().map(x => console.log(x));

    return (
        <GridItem rowSpan={12} colSpan={7} align="center" direction="column" >
         <Box>
                {userPosts.map(post=>
                    <Box className="Logo" m="3%" border="1px" borderColor="gray.300"   borderRadius="0.5em" w="75%" boxShadow="lg" key={post.id} >
                        <Text margin="2%" fontSize="xs"> Posted by: {props.user.username}</Text>
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
            </Box>
        </GridItem>
    )
        
        
          
}




export default UserPostsComponent