import React from 'react'
import PostContainer from "./PostContainer"
import { 
    GridItem,
    Heading,
    Spacer,
} from "@chakra-ui/react";

let posts = [
    {post: {id: 1, title: "What a time to be alive", content: "Today I watched the world burn"},tags:["angry", "happy", "complex", "curious"]},
    {post: {id: 2, title: "I don't know what's happening",content: "What's going on, where are my shoes?"},tags:["cool"]},
    {post: {id: 3, title: "It's the last week of flatiron",content: "Presentations are almost done"}, tags:["relieved"]},
  ]
class AllPostsComponent extends React.Component {

    state={
        posts: posts
      }

    // componentDidMount here (UseeffectHook) 
    //fetch request inside of Useeffect, map through that return a post container for each element
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