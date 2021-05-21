import React, {useState, useEffect} from 'react'
import PostContainer from "./PostContainer"
import { 
    Grid, GridItem,
} from "@chakra-ui/react";


const AllPostsComponent = () => {
  
   const [loadedPosts, setLoadedPosts] = useState(null);


   useEffect(() => {
      fetch("http://localhost:3000/api/v1/posts")
        .then(res =>{ 
          if (!res.ok){
            throw Error ("could not fetch data for that resource")
          }
           return res.json();
          })
        .then(data => {
          const posts = data;
          setLoadedPosts(posts);
          })
        .catch((err)=>{console.log(err.message)})
   }, []);
  


        return (
           <Grid rowSpan={12} colSpan={7} align="center" direction="column" >
             <GridItem position="relative">
              {loadedPosts && <PostContainer 
                  posts={loadedPosts} 
                />}
              </GridItem>
           </Grid>
        )
    
}



export default AllPostsComponent