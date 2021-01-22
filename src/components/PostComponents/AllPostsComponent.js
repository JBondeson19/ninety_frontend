import React from 'react'
import PostContainer from "./PostContainer"
import { 
    GridItem,
    Heading,
    Spacer,
} from "@chakra-ui/react";

class AllPostsComponent extends React.Component {
    render() {
        return (
           <GridItem rowSpan={4} colSpan={4} align="center" direction="column" >
                <PostContainer />
                <PostContainer />
                <PostContainer />
           </GridItem>
        )
    }
}


export default AllPostsComponent