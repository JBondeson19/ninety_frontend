import React from 'react'
import {
    GridItem,
    Heading
} from "@chakra-ui/react"

export default function Profile() {
    return (
        <GridItem rowSpan={3} colSpan={2} border="1px" bg="violet" align="center" mt="7%" borderRadius="0.95em">
            <Heading m="3%" > Maggie123's Profile</Heading>
        </GridItem>
    )
}
