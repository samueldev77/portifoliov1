import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure, Box, Link, useBreakpointValue
  } from '@chakra-ui/react'
import Hamburguer from './MenuHamburguer'
import React, { useState, useEffect } from 'react';
import {links} from '../Header';

export const MenuDrawer = (props)=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [open, setOpen] = useState(false)
    const handleClick = ()=>{
        onOpen()
        setOpen(!open)
    }
    const handleClose = () => {
        onClose()
        setOpen(false)
    }
    return (
      <>
            <Hamburguer display={props.display} value={open} onClick={handleClick}/>
            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent p='5% 0px' bgColor='rgba(6,9,15,0.4)' backdropFilter="blur(5px)" marginTop='10vh' borderBottom='solid 1px'>
                    <DrawerBody>
                        <Box display='flex' flexDirection='column' gap='30px' color='white' textAlign='center'>
                            {links.map((link, key)=>{
                                return(
                                    <Link key={key} _hover={{color:'blueGradient.100'}} onClick={handleClose} textDecoration='none' href={link.href} fontWeight='300' fontSize='1.05rem'>{link.text}</Link>
                                )
                            })}
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
      </>
    )
}
export default MenuDrawer