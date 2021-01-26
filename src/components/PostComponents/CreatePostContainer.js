import React, {useState} from 'react'
// import { useHistory } from "react-router-dom";
import TagList from './TagList'
import { 
    Input,
    Textarea,
    Box,
    Grid,
    Stack,
    Spacer,
    Button,
    Heading,
    FormControl,
    
} from "@chakra-ui/react";



export default function CreatePostContainer(props) {

    // do your fetch request here 
    // I will need state management for anything that's getting submitted
    let [title, setTitle] = useState("")
    let [content, setContent] = useState("")
    // let [tags, setTags] = useState([])
    
    function createPost(event) {
        event.preventDefault()

        let url = "http://localhost:3000/posts"


        let reqObj = {
            method: "POST",
            headers: { 'Content-Type': 'application/json', Accept: "application/json"},
            body: JSON.stringify({
                title: title,
                content: content,
                user_id: 5
            })
        }

        fetch(url, reqObj)
        .then(res => res.json())
        .then(post => console.log(post))

    }
    

    return (
    <Box align="center" max>
        <Heading m="2%"> New Post </Heading>
       <Grid direction="column" w="60%" h="95%" border="1px" borderColor="gray.300"  borderRadius="0.95em" position="flex" > 
            <form onSubmit={(event) =>
            createPost(event)}>
            <FormControl align="center" >
                <Input 
                    align="center" 
                    borderColor="gray.400" 
                    m="10px" 
                    placeholder="Title" 
                    w="80%" 
                    variant="filled" 
                    onChange={(event) =>
                       setTitle(event.target.value)
                    }
                    value={title}
                />
                </FormControl>
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
                <TagList />
            </FormControl>
                <Spacer/>
                    <Stack direction={['column', 'row', 'row']} m="35px" >
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
    )
}
