import React, {useState, useEffect} from 'react'
import PostContainer from "./PostContainer"
import { 
    Grid, GridItem,
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


   
        return (
           <Grid rowSpan={12} colSpan={7} align="center" direction="column" >
             <GridItem position="relative">

             
              {loadedPosts.slice(0).reverse().map(post =>
                  <PostContainer 
                    post={post} 
                    key={post.id}
                  />
                )
              } 
              </GridItem>
           </Grid>
        )
    
}



export default AllPostsComponent