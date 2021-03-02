import React from 'react'
import { VscRemove } from "react-icons/vsc";
import { 
    Flex,
    List,
    ListItem,
    IconButton,
    Input,
} from "@chakra-ui/react";


export default function TagList({onAddTag, enterFeelings}) {
    
   

    return (
        <Flex ml="3%" className="input-tag">
        <List color= "gray.300">
            <ListItem display="inline-block"  m="0 5px" >
                #hashtags go here <IconButton h="5px" w="5px" icon={<VscRemove/>} />
            </ListItem>
            <ListItem display="inline-block"  m="0 5px" >
                <Input placeholder="#hashtag" variant="unstyled" w="85%" onKeyUp={event => enterFeelings(event)}
                />
            </ListItem>
            
        </List>
    </Flex>
    )
}
