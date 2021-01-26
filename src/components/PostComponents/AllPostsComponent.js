import React from 'react'
import PostContainer from "./PostContainer"
import { 
    GridItem,
} from "@chakra-ui/react";


class AllPostsComponent extends React.Component {

   state={
     posts: []
   }

    componentDidMount(){
      fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(postsArray => this.setState({
        posts: postsArray
      }))
    }

    render() {
        return (
           <GridItem rowSpan={4} colSpan={4} align="center" direction="column" >
           {this.state.posts.map(posts =>
            <PostContainer post={posts} />
           )}
           </GridItem>
        )
    }
}



export default AllPostsComponent