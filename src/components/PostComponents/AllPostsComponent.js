import React from 'react'
import PostContainer from "./PostContainer"
import { 
    GridItem,
} from "@chakra-ui/react";


class AllPostsComponent extends React.Component {

   state={
     posts: [],
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
           <GridItem rowSpan={12} colSpan={7} align="center" direction="column" >
           {this.state.posts.slice(0).reverse().map(posts =>
              <PostContainer 
                key={posts.id}
                post={posts} 

              />)} 
           </GridItem>
        )
    }
}



export default AllPostsComponent