import React from 'react'
import {
    GridItem,
    Heading,
    Stack,
    Container,
    Wrap,
    WrapItem,
    Center,
    Avatar
} from "@chakra-ui/react"

export default function Profile() {
    return (
        <GridItem rowSpan={1} colSpan={2} border="1px" bg="violet" align="center" mt="12%" borderRadius="0.95em">
            <Heading m="5%" > Maggie123's Profile</Heading>
            <Stack align="center">
                <Wrap>
                    <WrapItem>
                            <Avatar size="2xl" name="Maggie" src="https://nestia-food.obs.ap-southeast-3.myhuaweicloud.com/201912/06/289eddac9313d4dada6741d9803247d5.jpg" />
                    </WrapItem>
                </Wrap>

                <Container align="left">
                    This is Maggie's Bio. She's super cool and loves the color purple. You can find her hiking up a mountain or nude moonbathing late in the night. 
                </Container>
            </Stack>
        </GridItem>
    )
}
