
import PostContainer from "./PostContainer"
import { 
    Grid, GridItem, Text
} from "@chakra-ui/react";
import useFetch from '../../useFetch';


const AllPostsComponent = () => {

  const {data, isLoading, error} = useFetch('http://localhost:3000/api/v1/posts')
  


        return (
           <Grid rowSpan={12} colSpan={7} align="center" direction="column" >
             <GridItem position="relative">
               {error && <Text fontSize="6xl">{error}</Text>}
               {isLoading && <Text fontSize='6xl'>Loading...</Text>}
              {data && <PostContainer posts={data} />}
              </GridItem>
           </Grid>
        )
    
}



export default AllPostsComponent