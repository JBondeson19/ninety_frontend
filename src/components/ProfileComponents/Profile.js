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
   
    return (
       
        <GridItem rowSpan={1} colSpan={2} border="1px" bg="yellow.600" align="center" mt="12%" borderRadius="0.5em">
            <Heading m="5%" > Profile</Heading>
            <Stack align="center">
                <Wrap>
                    <WrapItem>
                            <Avatar size="2xl" name={props.user.user.username} />
                    </WrapItem>
                </Wrap>

                <Container align="left">
                  {props.user.user.bio}
                </Container>
            </Stack>
        </GridItem>
    )
}
