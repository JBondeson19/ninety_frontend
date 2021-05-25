import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
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



const CreatePostContainer = (props) => {
   
    // do your fetch request here 
    // I will need state management for anything that's getting submitted
    let [content, setContent] = useState("")

  
    const handleSubmit = (event) =>{
        event.preventDefault(); 

        const post = {content};


        fetch("http://localhost:3000/api/v1/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json",
                "Authorization": `BEARER ${props.token}`
            },
            body: JSON.stringify({
                content: content
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))

    }
      
    
    
    

    return (
        <Box align="center" >
            <Heading m="2%"> New Post </Heading>
        <Grid direction="column" w="60%" border="1px" borderColor="gray.300"  borderRadius="0.95em" > 
                <form onSubmit={handleSubmit}>
                <FormControl>
                    <Textarea 
                        align="center" 
                        borderColor="gray.400" 
                        m="10px" 
                        w="80%" 
                        placeholder="What inspires you?" 
                        variant="filled" 
                        onChange={(event)=>setContent(event.target.value)}
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