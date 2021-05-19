import React, {useState, useEffect} from 'react'
import PostContainer from "./PostContainer"
import { 
    GridItem,
} from "@chakra-ui/react";


const AllPostsComponent = () => {

  //  state={
  //    posts: [],
  //  }

   const [loadedPosts, setLoadedPosts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
     setIsLoading(true)
      fetch("http://localhost:3000/api/v1/posts")
        .then(res => res.json())
        .then(postsArray => {
          const posts = postsArray;
            setIsLoading(false);
            setLoadedPosts(
              posts.map((post)=>({
                content: post.content,
                id: post.id,
                user: post.user.user_username
              }))
            )})
        .catch(err =>{
          console.log(err);
          setIsLoading(false);
        });
   }, []);

  //  componentDidMount(){
  //   fetch("http://localhost:3000/posts")
  //   .then(res => res.json())
  //   .then(postsArray => this.setState({
  //     posts: postsArray
  //   }))
  // }

    



    
        return (
           <GridItem rowSpan={12} colSpan={7} align="center" direction="column" >
             {console.log(loadedPosts)}
             
           {/* {loadedPosts.slice(0).reverse().map(posts =>
              <PostContainer 
                post={posts} 

              />)}  */}
           </GridItem>
        )
    
}



export default AllPostsComponent