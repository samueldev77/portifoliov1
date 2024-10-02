import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure, Box, Link, useBreakpointValue
  } from '@chakra-ui/react'
import Hamburguer from './MenuHamburguer'
import React, { useState, useEffect } from 'react';

export const MenuDrawer = (props)=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [open, setOpen] = useState(false)
    const handleClick = ()=>{
        onOpen()
        setOpen(!open)
    }
    return (
      <>
            <Hamburguer display={props.display} value={open} onClick={handleClick}/>
            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent p='5% 0px' bgColor='rgba(6,9,15,0.4)' backdropFilter="blur(5px)" marginTop='10vh' borderBottom='solid 1px'>
                    <DrawerBody>
                        <Box display='flex' flexDirection='column' gap='30px' color='white' textAlign='center'>
                            <Link _hover={{color:'text.100', opacity:'80%'}} textDecoration='none' href="#inicio" fontWeight='200' fontSize='1.2rem'>Inicio</Link>
                            <Link _hover={{color:'text.100', opacity:'80%'}} textDecoration='none' href="#projetos" fontWeight='200' fontSize='1.2rem'>Projetos</Link>
                            <Link _hover={{color:'text.100', opacity:'80%'}} textDecoration='none' href="#experiencia" fontWeight='200' fontSize='1.2rem'>Experiência</Link>
                            <Link _hover={{color:'text.100', opacity:'80%'}} mb='30px'textDecoration='none' href="#contato" fontWeight='200' fontSize='1.2rem'>Contato</Link>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
      </>
    )
}
export default MenuDrawer