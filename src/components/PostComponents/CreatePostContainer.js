import React from 'react'
import TagList from './TagList'
import { 
    Input,
    Textarea,
    Box,
    Grid,
    Stack,
    Spacer,
    Button,
    Heading
} from "@chakra-ui/react";



export default function CreatePostContainer() {

    // do your fetch request here 
    // I will need state management for anything that's getting submitted
    
    // let [title, setTitle] = useState("")
    // let [content, setContent] = useState("")
    // let [tags, setTags] = useState([])

    return (
    <Box align="center" max>
        <Heading m="2%"> New Post </Heading>
       <Grid direction="column" w="60%" h="95%" border="1px" borderColor="gray.300"  borderRadius="0.95em" position="flex">
            <Stack align="center" >
                <Input 
                    align="center" 
                    borderColor="gray.400" 
                    m="10px" 
                    placeholder="Title" 
                    w="80%" 
                    variant="filled" 
                    onChange={(event) =>
                        this.setState({title: event.target.value})
                    }
                />
                <Textarea 
                    align="center" 
                    borderColor="gray.400" 
                    m="10px" 
                    w="80%" 
                    placeholder="What inspires you?" 
                    variant="filled" 
                />
                <TagList />
            </Stack>
        <Spacer/>
            <Stack direction={['column', 'row', 'row']} m="35px" >
                <Button>
                    Nevermind
                </Button>
            <Spacer/>
                <Button>
                        Submit
                </Button>
            </Stack>
       </Grid>
    </Box>
    )
}