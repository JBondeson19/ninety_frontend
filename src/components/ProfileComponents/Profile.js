import React from 'react'
import {
    GridItem,
    Heading,
    Stack,
    Container,
    Wrap,
    WrapItem,
    Avatar
} from "@chakra-ui/react"

export default function Profile(props) {

    //do a fetch here so you can load updated posts in state related to user's id. 
    
    return (
        <GridItem rowSpan={1} colSpan={2} border="1px" bg="violet" align="center" mt="12%" borderRadius="0.5em">
            <Heading m="5%" > Profile</Heading>
            <Stack align="center">
                <Wrap>
                    <WrapItem>
                            <Avatar size="2xl" name="Maggie" src="https://i.imgur.com/EAfVzSY.jpg" />
                    </WrapItem>
                </Wrap>

                <Container align="left">
                  {props.user.bio}
                </Container>
            </Stack>
        </GridItem>
    )
}
