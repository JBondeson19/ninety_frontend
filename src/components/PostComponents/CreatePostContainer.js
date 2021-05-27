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
   

    let [content, setContent] = useState("")
    const [isLoading, setIsLoading] = useState(false )

    let history = useHistory(); 

  
    const handleSubmit = (event) =>{
        event.preventDefault(); 

        setIsLoading(true);

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
        .then(() => {
            console.log("new post added")
            setIsLoading(false);
            history.push('/home')
        })

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
                   {!isLoading && <Button type="submit" >Submit</Button>}
                   {isLoading && <Button disabled>Adding...</Button>}
                </Stack>
                    </form>
        </Grid>
        </Box>

    );
}

export default CreatePostContainer