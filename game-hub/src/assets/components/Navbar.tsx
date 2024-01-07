import { HStack, Img } from '@chakra-ui/react'
import React from 'react'
import logo from "../../assets/logo.svg"
const Navbar = () => {
  return (
    <HStack>
        <Img src={logo} boxSize='120px'></Img>
    </HStack>
  )
}

export default Navbar
