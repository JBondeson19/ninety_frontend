import React from 'react'
import { VscRemove } from "react-icons/vsc";
import { 
    Flex,
    List,
    ListItem,
    IconButton,
    Input,
    Tag,
    TagLabel
} from "@chakra-ui/react";

class TagList extends React.Component {
    render() {
        return (
            <Flex className="input-tag">
                <List color= "gray.300">
                    <ListItem display="inline-block"  m="0 5px" >
                        <Input placeholder="#hashtag" variant="unstyled" w="85%"  />
                    </ListItem>
                    <ListItem display="inline-block"  m="0 5px" >
                        #hashtags go here <IconButton m="2.px" h="10px" w="10px" icon={<VscRemove/>} />
                    </ListItem>
                    <ListItem display="inline-block"  m="0 5px">
                        #all of the hashtags 
                    </ListItem>
                    <ListItem display="inline-block"  m="0 5px">
                        #testing 
                    </ListItem>
                    <ListItem display="inline-block" m="0 5px" >
                        #testing
                    </ListItem>
                    
                </List>
            </Flex>
        )
    }
}

export default TagList