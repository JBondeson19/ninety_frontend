import React from "react";
import {Link} from "react-router-dom"
import { 
    Flex, 
    Heading, 
    Box, 
    Text,
    Stack,
    InputGroup,
    InputRightElement,
    Input,
    Divider
  } from "@chakra-ui/react"
import { VscMenu } from "react-icons/vsc";
import { RiHome2Line } from "react-icons/ri"
import {BsFillPersonFill} from "react-icons/bs"
import {ImFileText2} from "react-icons/im"
import { BsPeopleFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md"
import { BsSearch } from "react-icons/bs";

const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  );

const Navbar = () => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
    >
      <Flex align="center" mr={5}>
        <Heading p="5px">"</Heading>
        <Heading as="h2" size="2xl" as="u">
          90
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
          <VscMenu/>  
      </Box>

      <Stack
        flexGrow={1}
        spacing={6}
        align="right"
        justify={["right", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        >
          <MenuItems>
            <Link to="/home">
              <RiHome2Line/>
            </Link>
          </MenuItems>
        
        <MenuItems>
          <Link to="/profile">
            <BsFillPersonFill />
          </Link>
        </MenuItems>

        <MenuItems>
          <Link to="/post">
            <ImFileText2 />
          </Link>
        </MenuItems>
        
        <MenuItems><BsPeopleFill /></MenuItems>
        <MenuItems><MdMailOutline /></MenuItems>
        </Stack>
      {/* </Box> */}

      <Box>
      <InputGroup>
      <InputRightElement
        children={<BsSearch />}
      />
      <Input placeholder="Search" borderRadius="1.5em"/>
      </InputGroup>

      
      </Box>
      <Divider />
    </Flex>
  );
}

export default Navbar