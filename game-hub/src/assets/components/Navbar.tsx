import { HStack, Img } from '@chakra-ui/react'
import React from 'react'
import logo from "../../assets/logo.svg"
import ColorModeSwitch from './ColorModeSwitch'
const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
        <Img src={logo} boxSize='60px'></Img>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar
