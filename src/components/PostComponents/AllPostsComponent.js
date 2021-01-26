import React from 'react'
import PostContainer from "./PostContainer"
import { 
    GridItem,
} from "@chakra-ui/react";

// let posts = [
//     {post: {id: 1, title: "What a time to be alive", content: "Today I watched the world burn"},tags:["angry", "happy", "complex", "curious"]},
//     {post: {id: 2, title: "I don't know what's happening",content: "What's going on, where are my shoes?"},tags:["cool"]},
//     {post: {id: 3, title: "It's the last week of flatiron",content: "Presentations are almost done"}, tags:["relieved"]},
//   ]
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