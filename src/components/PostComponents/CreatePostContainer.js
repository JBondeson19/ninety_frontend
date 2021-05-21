import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import TagList from './TagList'
import { 
    Textarea,
    Box,
    Grid,
    Stack,
    Spacer,
    Button,
    Heading,
    FormControl,
    
} from "@chakra-ui/react";



const CreatePostContainer = () => {
   
    // do your fetch request here 
    // I will need state management for anything that's getting submitted

    let [content, setContent] = useState("")

    // const history = useHistory();
    
   


    
    // function createPost(event) {
    //     event.preventDefault()

    //     let url = "http://localhost:3000/posts"
    //     let user= `${userInfo.user.id}`

    //     let reqObj = {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json', Accept: "application/json"},
    //         body: JSON.stringify({
    //             content: content,
    //             user_id: user
    //         })
    //     }

    //     fetch(url, reqObj)
    //     .then(res => res.json())
    //     .then(post => console.log(post))

    //     history.push("/home")
    // }

  
      
    
    
    

    return (
        <Box align="center" >
            <Heading m="2%"> New Post </Heading>
        <Grid direction="column" w="60%" border="1px" borderColor="gray.300"  borderRadius="0.95em" > 
                <form onSubmit={(event) =>createPost(event)}>
                <FormControl>
                    <Textarea 
                        align="center" 
                        borderColor="gray.400" 
                        m="10px" 
                        w="80%" 
                        placeholder="What inspires you?" 
                        variant="filled" 
                        onChange={(event)=>
                        setContent(event.target.value)
                        }
                        value={content}
                    />
        
                </FormControl>
                    <Spacer/>
                        <Stack 
                            direction={['column', 'row', 'row']} 
                            m="35px" 
                        >
                            <Button>
                                Nevermind
                            </Button>
                                <Spacer/>
                            <Button type="submit" >
                                    Submit
                            </Button>
                        </Stack>
                    </form>
        </Grid>
        </Box>

    );
}

export default CreatePostContainer