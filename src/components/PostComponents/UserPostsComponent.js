import React from 'react'
import PostContainer from "./PostContainer"
import { 
    GridItem,
} from "@chakra-ui/react";



class UserPostsComponent extends React.Component {

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
          
        const userPosts = this.state.posts.filter(posts => posts.user_id === this.props.user.id)

        

        return (
           <GridItem rowSpan={12} colSpan={7} align="center" direction="column" >
           {userPosts.slice(0).reverse().map(posts =>
            <PostContainer post={posts} />)}
           </GridItem>
        )
    }
}



export default UserPostsComponent