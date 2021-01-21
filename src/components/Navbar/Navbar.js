import React from "react";
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

const Navbar = (props) => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading p="5px">"</Heading>
        <Heading as="h2" size="2xl" isTruncatedletterSpacing={"-.1rem"} as="u">
          90
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <VscMenu/>  
      </Box>

      {/* <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
      > */}
      <Stack
        flexGrow={1}
        spacing={6}
        align="right"
        justify={["right", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        >
        <MenuItems><RiHome2Line/></MenuItems>
        <MenuItems><BsFillPersonFill /></MenuItems>
        <MenuItems><ImFileText2 /></MenuItems>
        <MenuItems><BsPeopleFill /></MenuItems>
        <MenuItems><MdMailOutline /></MenuItems>
        </Stack>
      {/* </Box> */}

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      <InputGroup>
      <InputRightElement
        children={<BsSearch />}
      />
      <Input placeholder="Search" borderRadius="1.5em"/>
      </InputGroup>

      
      </Box>
      <Divider colorScheme="blue" />
    </Flex>
  );
}

export default Navbar